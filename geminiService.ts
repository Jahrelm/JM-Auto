
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface AISuggestion {
  filteredIndices: number[];
  explanation: string;
}

export const getCarSuggestions = async (prompt: string, cars: any[]): Promise<AISuggestion> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is looking for a car. Based on their request: "${prompt}", analyze our inventory: ${JSON.stringify(cars)}.
      Return a JSON object with:
      1. filteredIndices: an array of indices from the input list that match the user's needs.
      2. explanation: a short friendly text explaining why these cars were chosen.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            filteredIndices: {
              type: Type.ARRAY,
              items: { type: Type.INTEGER }
            },
            explanation: { type: Type.STRING }
          },
          required: ["filteredIndices", "explanation"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as AISuggestion;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return { filteredIndices: [], explanation: "I encountered an error trying to find your perfect car. Please try again or use the manual filters!" };
  }
};
