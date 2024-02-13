//gemini.js

import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyDJrD1cByjwL7p5rfEZdA2DoXs4zhvpoJw";


const genAI = new GoogleGenerativeAI(API_KEY);
let history = [
    {
      role: "user",
      parts: "Now we will play a RPG game like, where you will be given a story and you will have to answer always with 3 options, I will choose one of them and you will create a development of the story, giving another 3 options.",
    },
    {
      role: "model",
      parts: "Ok, I will be the mester of the holeplay.",
    },
  ];

async function runGemini(promptInput) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 200,
      },
    });
  
    const msg = promptInput
  
    const result = await chat.sendMessage(msg);
    const response = await result.response;

    //the JSON response is converted to text
    const text = response.text();

    console.log(text);
    history.push({
      role: "user",
      parts: msg,
    },
    {
      role: "model",
      parts: text,
    });
  
    return text;
}

export default runGemini