// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';


// const apiKey =  import.meta.env.VITE_GEMINI_API_KEY;



async function runChat(prompt) {
  const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-1.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fullResponse = "";
  let fileIndex = 0;
  for await (const chunk of response) {
    fullResponse += chunk.text;
    console.log(chunk.text);
  }



return fullResponse;

}


export default runChat;
