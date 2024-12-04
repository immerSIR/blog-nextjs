"use client";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/app/lib/definition";
import { getSession } from "next-auth/react";

export default function Page() {
    const router = useRouter();
    const PROMPT = `
<prompt>
    <role>Creative Blog Writer</role>
    <task>Write a blog post</task>
    <title>{title}</title>
    <instructions>
        <instruction>Your blog post should be creative, engaging, and highly relevant to the provided title.</instruction>
        <instruction>Focus on conciseness; ensure that every sentence adds value to the topic.</instruction>
        <instruction>Use a clear and concise writing style.</instruction>
        <instruction>Avoid off-topic content and maintain strict focus on the title.</instruction>
        <instruction>Ensure proper grammar and spelling.</instruction>
        <instruction>Eliminate any redundant or unnecessary information.</instruction>
        <response_formatting>
            <formatting_rule>Start with an engaging introduction related to the title.</formatting_rule>
            <formatting_rule>Develop the main idea with precise and supporting details.</formatting_rule>
            <formatting_rule>Conclude with a strong closing statement that reinforces the main message.</formatting_rule>
            <formatting_rule>Maintain a consistent and focused tone throughout the post.</formatting_rule>
            <formatting_rule>Avoid using jargon or overly complex language.</formatting_rule>
        </response_formatting>
    </instructions>
    <examples>
        <example>
            <prompt>Title: The Beauty of Autumn</prompt>
            <response>Autumn paints the world in vibrant hues of red and gold. As leaves fall gracefully, there's a sense of renewal and reflection. Embracing the crisp air and cozy ambiance, autumn invites us to appreciate nature's fleeting masterpiece.</response>
        </example>
        <example>
            <prompt>Title: The Future of Technology</prompt>
            <response>The future of technology promises innovations that will transform our daily lives. From artificial intelligence to renewable energy solutions, advancements are set to create a more connected and sustainable world. Embracing these changes can lead to unprecedented opportunities.</response>
        </example>
        <example>
            <prompt>Title: Sustainable Living Tips</prompt>
            <response>Sustainable living begins with small, intentional choices. Reducing waste by recycling, conserving water, and opting for energy-efficient appliances can significantly impact the environment. Additionally, supporting local and eco-friendly products fosters a healthier planet for future generations.</response>
        </example>
        <example>
            <prompt>Title: The Importance of Mental Health</prompt>
            <response>Mental health is crucial for overall well-being. Prioritizing self-care, seeking professional support, and fostering strong relationships can enhance emotional resilience. By addressing mental health openly, we create a more supportive and understanding society.</response>
        </example>
    </examples>
</prompt>
`;

    const [generating, setGenerating] = useState(false);
    const [content, setContent] = useState("");
    const [user, setUser] = useState<User | null>(null);
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        content: "",
        date: new Date().toISOString().slice(0, 10),
    });

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const uuid = uuidv4();
        fetch(
            `/api/posts?id=${uuid}&title=${formData.title}&author=${user?.name}&content=${content}&date=${formData.date}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, id: uuid }),
            }
        )
            .then(() => {
                // Clear form fields
                setFormData({
                    id: "",
                    title: "",
                    content: "",
                    date: "",
                });
                router.push("/blog/posts");
            })
            .catch(console.error);
    };

    const generateContent = () => {
        setGenerating(true);
        if (!formData?.title) {
            return false;
        }
        const requestParams = {
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `${PROMPT}<title>${formData?.title}<title>`,
                },
                { role: "user", content: formData?.title },
            ],
        };
        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify(requestParams),
        })
            .then((response) => response.json())
            .then((data) => {
                setContent(data.choices[0].message.content);
                console.log(data.choices[0].message.content);
                setGenerating(false);
            })
            .catch(console.error);
    };

    useEffect(() => {
        console.log("API KEY", process.env.OPENAI_API_KEY);
        getSession().then((session) => {
            setUser(session?.user || null);
            if (!session?.user) {
                router.push("/blog/posts");
            }
        });
    }, []);

    return (
        <div className="bg-white p-8 rounded shadow">
            <h2 className="text-2xl mb-4 text-purple-700">New Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block font-medium">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block font-medium">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        rows={4}
                        value={content}
                        onChange={handleChange}
                        className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
                    ></textarea>
                    {generating && (
                        <p className="text-purple-700 my-1">
                            Generating content...
                        </p>
                    )}
                    <button
                        onClick={generateContent}
                        type="button"
                        className="bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700"
                    >
                        Generate Content
                    </button>
                </div>
                <div>
                    <label htmlFor="date" className="block font-medium">
                        Date:
                    </label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date}
                        readOnly
                        className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-400 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
