//gemini.js

import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyDJrD1cByjwL7p5rfEZdA2DoXs4zhvpoJw";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function runGemini(promptInput) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = promptInput;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    console.log(text);

    return text;
}

export default runGemini