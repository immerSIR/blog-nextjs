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
        <instruction>Do not impose any length restrictions; prioritize conciseness and relevance.</instruction>
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
            <prompt>Title: The Future of AI in Africa</prompt>
            <response># The Future of AI in Africa

*By [Your Name], [Date]*

---

Artificial Intelligence (AI) is transforming industries and societies across the globe. In Africa, a continent rich with diversity and potential, AI presents unique opportunities and challenges. This blog post explores the current state of AI in Africa, the opportunities it presents, the challenges to its adoption, and what the future may hold.

## Table of Contents

1. [Introduction](#introduction)
2. [The Current State of AI in Africa](#the-current-state-of-ai-in-africa)
3. [Opportunities for AI in Africa](#opportunities-for-ai-in-africa)
   - [Agriculture](#agriculture)
   - [Healthcare](#healthcare)
   - [Education](#education)
   - [Financial Services](#financial-services)
4. [Challenges Facing AI Adoption](#challenges-facing-ai-adoption)
   - [Infrastructure Limitations](#infrastructure-limitations)
   - [Skill Gaps](#skill-gaps)
   - [Ethical and Regulatory Concerns](#ethical-and-regulatory-concerns)
5. [Notable Initiatives and Success Stories](#notable-initiatives-and-success-stories)
6. [The Role of Government and Policy](#the-role-of-government-and-policy)
7. [Future Outlook](#future-outlook)
8. [Conclusion](#conclusion)

---

## Introduction

As we advance further into the 21st century, AI stands at the forefront of technological innovation. For Africa, a continent undergoing rapid transformation, AI offers a chance to leapfrog traditional development hurdles and address longstanding challenges. However, harnessing AI's full potential requires a nuanced understanding of both its promises and pitfalls within the African context.

## The Current State of AI in Africa

AI development in Africa is still in its nascent stages but is rapidly gaining momentum. Tech hubs are sprouting across the continent, with notable centers in Nigeria, Kenya, South Africa, and Egypt. According to **Disrupt Africa's** 2023 report, over 600 active tech hubs are fostering innovation and entrepreneurship.

International tech giants like **Google**, **IBM**, and **Microsoft** have established AI research labs and accelerator programs in Africa. For instance, in 2019, Google opened its first African AI lab in Accra, Ghana, focusing on applying AI to African challenges.

## Opportunities for AI in Africa

### Agriculture

Agriculture employs a significant portion of Africa's workforce. AI can revolutionize this sector through:

- **Precision Farming**: Using AI-driven analytics to optimize planting and harvesting.
- **Disease Detection**: Deploying machine learning models to identify crop diseases early.
- **Weather Prediction**: Enhancing forecasting to better prepare farmers for climate variability.

### Healthcare

AI has the potential to bridge healthcare gaps by:

- **Diagnostic Tools**: Implementing AI algorithms to assist in diagnosing diseases like malaria and tuberculosis.
- **Telemedicine**: Facilitating remote consultations and personalized care plans.
- **Health Data Management**: Analyzing large datasets to improve public health strategies.

### Education

In education, AI can:

- **Personalize Learning**: Tailoring educational content to individual student needs.
- **Expand Access**: Providing learning opportunities in remote areas through AI-driven platforms.
- **Skill Development**: Offering AI-based training programs to build a future-ready workforce.

### Financial Services

AI is driving financial inclusion by:

- **Credit Scoring**: Using alternative data to assess creditworthiness of the unbanked population.
- **Fraud Detection**: Enhancing security in digital transactions.
- **Chatbots**: Improving customer service for banking and financial services.

## Challenges Facing AI Adoption

### Infrastructure Limitations

- **Connectivity**: Limited internet access hampers the deployment of AI solutions.
- **Power Supply**: Unreliable electricity affects the operation of AI infrastructure.
- **Computing Resources**: High costs of hardware impede widespread AI implementation.

### Skill Gaps

- **Education**: There is a shortage of professionals trained in AI and data science.
- **Brain Drain**: Skilled individuals often move abroad for better opportunities.
- **Training Programs**: Limited access to quality AI education and resources.

### Ethical and Regulatory Concerns

- **Data Privacy**: Weak regulations may lead to misuse of personal data.
- **Bias in AI**: Lack of diverse data can result in biased AI systems.
- **Regulation**: Absence of comprehensive AI policies creates uncertainty.

## Notable Initiatives and Success Stories

- **M-Pesa**: A mobile banking service in Kenya using AI for fraud detection and financial services.
- **Zipline**: Utilizing AI-powered drones to deliver medical supplies in Rwanda and Ghana.
- **Data Science Nigeria**: An initiative aiming to train one million AI talents across Africa.

## The Role of Government and Policy

Governments play a crucial role by:

- **Investing in Infrastructure**: Enhancing connectivity and power supply.
- **Educational Reform**: Incorporating AI and STEM subjects into curricula.
- **Policy Frameworks**: Developing regulations that promote innovation while protecting citizens.

For example, **Rwanda** has established a regulatory sandbox to foster fintech and AI development, while **South Africa** released its **Presidential Commission on the Fourth Industrial Revolution** report outlining AI strategies.

## Future Outlook

The future of AI in Africa is promising if key challenges are addressed:

- **Collaborative Efforts**: Partnerships between governments, private sector, and academia can accelerate AI adoption.
- **Inclusive Growth**: Ensuring AI benefits are accessible to all segments of society.
- **Innovation Hubs**: Supporting local startups to create homegrown AI solutions.

By 2030, AI could add up to **$1.5 trillion** to Africa's economy, according to estimates by **McKinsey & Company**.

## Conclusion

AI holds the potential to transform Africa's economies and improve the quality of life for its people. While challenges exist, strategic investments, policy reforms, and collaborative initiatives can pave the way for an AI-driven future in Africa. Embracing AI today will empower the continent to tackle tomorrow's challenges and unlock unprecedented opportunities.

---

*What are your thoughts on AI's role in Africa's future? Share your comments below!*
            </response>
        </example>
        <example>
            <prompt>Title: Exploring the Rich Tapestry of Indian Cuisine</prompt>
            <response># Exploring the Rich Tapestry of Indian Cuisine

*By [Your Name], [Date]*

---

Indian cuisine is a vibrant tapestry of flavors, colors, and aromas that reflects the country's rich history and diverse culture. From the spicy curries of the south to the hearty dishes of the north, Indian food offers a culinary journey like no other. This blog post delves into the depths of Indian cuisine, exploring its historical roots, regional variations, global influence, health benefits, and future trends.

## Table of Contents

1. [Introduction](#introduction)
2. [Historical Roots of Indian Cuisine](#historical-roots-of-indian-cuisine)
3. [Regional Varieties](#regional-varieties)
   - [North Indian Cuisine](#north-indian-cuisine)
   - [South Indian Cuisine](#south-indian-cuisine)
   - [East Indian Cuisine](#east-indian-cuisine)
   - [West Indian Cuisine](#west-indian-cuisine)
4. [Global Influence and Adaptation](#global-influence-and-adaptation)
5. [Health Benefits of Indian Spices](#health-benefits-of-indian-spices)
6. [Vegetarianism in Indian Culture](#vegetarianism-in-indian-culture)
7. [Modern Trends and Fusion Cuisine](#modern-trends-and-fusion-cuisine)
8. [Conclusion](#conclusion)

---

## Introduction

India's culinary heritage is as diverse as its people. The cuisine is a reflection of centuries of trade, invasion, colonialism, and cultural exchange. It's a harmonious blend of spices, herbs, vegetables, and fruits, creating dishes that are both flavorful and aromatic. Whether you're a seasoned foodie or new to Indian food, there's always something new to discover.

## Historical Roots of Indian Cuisine

The history of Indian cuisine dates back over 5,000 years. Early civilizations like the Harappans cultivated wheat, barley, rice, and millet. The Aryan tribes introduced the concept of cooking with fire, and the Vedic texts mention foods like yogurt, honey, and ghee.

Trade with neighboring regions brought new ingredients and cooking techniques:

- **Mughals**: Introduced rich gravies, pilafs, and biryanis.
- **Portuguese**: Brought tomatoes, potatoes, and chili peppers.
- **British**: Popularized tea and added their own culinary influences.

These interactions have woven a complex culinary fabric that defines modern Indian cuisine.

## Regional Varieties

India's vast geography and cultural diversity have given rise to distinct regional cuisines.

### North Indian Cuisine

Known for its rich and hearty dishes:

- **Staples**: Wheat-based bread like naan and roti.
- **Dishes**: Butter chicken, tandoori chicken, and paneer tikka.
- **Flavors**: Creamy gravies with nuts and dairy products.
- **Spices**: Cumin, coriander, and garam masala.

### South Indian Cuisine

Characterized by spicy flavors and rice-based dishes:

- **Staples**: Rice, dosa, idli, and sambar.
- **Dishes**: Coconut-based curries, rasam, and seafood.
- **Flavors**: Tangy and spicy, with liberal use of tamarind and chili.
- **Spices**: Mustard seeds, curry leaves, and asafoetida.

### East Indian Cuisine

Known for its sweets and seafood:

- **Staples**: Rice and fish.
- **Dishes**: Macher jhol (fish curry), momos, and pitha.
- **Flavors**: Subtle and delicate, often steamed or lightly fried.
- **Spices**: Mustard oil, panch phoron (five-spice blend).

### West Indian Cuisine

Diverse flavors ranging from sweet to spicy:

- **Staples**: Millet, rice, and legumes.
- **Dishes**: Dhokla, vada pav, and vindaloo.
- **Flavors**: Includes both vegetarian and non-vegetarian dishes.
- **Spices**: Coconut, peanuts, and sesame seeds.

## Global Influence and Adaptation

Indian cuisine has made a significant impact worldwide:

- **United Kingdom**: Chicken tikka masala is considered a national dish.
- **United States**: Growing popularity of Indian street foods and fusion restaurants.
- **Southeast Asia**: Influences seen in Malaysian and Singaporean cuisines.

Adaptations often blend Indian spices with local ingredients, creating unique fusion dishes.

## Health Benefits of Indian Spices

Indian spices are not just flavor enhancers but also offer health benefits:

- **Turmeric**: Contains curcumin, an anti-inflammatory compound.
- **Ginger**: Aids digestion and reduces nausea.
- **Garlic**: Lowers cholesterol and boosts the immune system.
- **Cinnamon**: Regulates blood sugar levels.

The traditional Indian diet, rich in plant-based foods and spices, aligns with many modern nutritional recommendations.

## Vegetarianism in Indian Culture

A significant portion of India's population practices vegetarianism due to religious and cultural beliefs:

- **Hinduism and Jainism**: Promote non-violence and respect for all living beings.
- **Vegetarian Dishes**: Include dal (lentils), sabzi (vegetable curry), and various legumes.
- **Protein Sources**: Paneer (cottage cheese), chickpeas, and lentils.

This has led to a diverse and flavorful array of vegetarian options in Indian cuisine.

## Modern Trends and Fusion Cuisine

Contemporary Indian cuisine is evolving:

- **Fusion Foods**: Combining Indian flavors with global cuisines, such as Indian-Chinese or Indo-Mexican.
- **Health Consciousness**: Emphasis on organic ingredients and healthy cooking methods.
- **Gourmet Dining**: Emergence of upscale Indian restaurants offering modern interpretations of traditional dishes.
- **Street Food Popularity**: Snacks like chaat, samosas, and kathi rolls gaining international fame.

These trends are making Indian cuisine more accessible and appealing to a global audience.

## Conclusion

Indian cuisine is a celebration of flavor, culture, and history. Its rich diversity offers something for everyone, whether you prefer spicy curries, sweet desserts, or healthy vegetarian dishes. As Indian food continues to gain global recognition, its future looks bright, promising even more exciting culinary innovations.

---

*What are your favorite Indian dishes or culinary experiences? Share your thoughts in the comments below!*
            </response>
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
            `/api/posts?id=${uuid}&title=${formData.title}&author=${
                user?.name
            }&content=${content || formData.content}&date=${formData.date}`,
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
                        value={content || formData?.content}
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
