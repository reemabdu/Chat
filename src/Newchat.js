// import logo from './logo.svg';
import React from 'react';
import Navbar from "./Components/NavBar/Navbar";

// import {GoogleGenerativeAI,HarmCategory,HarmBlockThreshold,} from "@google/generative-ai";


//   function Newchat() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
   
//   )
// }
// export default Newchat;



// node --version # Should be >= 18
// npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
      <div>
    <Navbar/>
    </div>

const apiKey = "AIzaSyDK1QaBfQA_oRqsi4sArV5jrJkqc5wT8FY"

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = apiKey;

async function newchat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text()
}

export default newchat;