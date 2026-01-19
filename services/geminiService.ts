
import { GoogleGenAI, Type } from "@google/genai";
import { ScentResult } from "../types";

export const analyzePsychology = async (answers: Record<number, string>): Promise<ScentResult> => {
  // Always initialize GoogleGenAI with a named parameter using process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    Based on the following user answers to a 10-question psychological quiz about New Year goals, emotional states, and sensory preferences:
    ${JSON.stringify(answers)}

    Tasks:
    1. Determine if the user's core subconscious need is 'Restart' (Breaking old patterns, fresh start) or 'Recharge' (Resting, gathering strength).
    2. Provide a deep, empathetic analysis (2-3 paragraphs) in Traditional Chinese.
    3. Match them with a "Soul Scent" profile.
    4. Crucially, recommend a product category that would be found on the high-end fragrance site https://tl5383.com.tw/.
    
    Return a JSON response with this schema:
    - archetype: A poetic title for their state (e.g., "破曉時分的尋路人").
    - coreNeed: "Restart" | "Recharge".
    - insight: Deep psychological analysis in Traditional Chinese.
    - scentName: A unique, evocative scent name.
    - scentNotes: Array of 3 specific scent notes (e.g. ['岩蘭草', '佛手柑', '玫瑰']).
    - scentDescription: A poetic description of why this scent matches their vibe.
    - recommendedActivity: A specific action to take this week.
    - productRecommendation: The name of a fragrance or home scent product type that fits them.
    - productUrl: "https://tl5383.com.tw/".
  `;

  try {
    // Upgrading to gemini-3-pro-preview for better handling of complex reasoning and empathetic text generation
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            archetype: { type: Type.STRING },
            coreNeed: { type: Type.STRING, enum: ['Restart', 'Recharge'] },
            insight: { type: Type.STRING },
            scentName: { type: Type.STRING },
            scentNotes: { type: Type.ARRAY, items: { type: Type.STRING } },
            scentDescription: { type: Type.STRING },
            recommendedActivity: { type: Type.STRING },
            productRecommendation: { type: Type.STRING },
            productUrl: { type: Type.STRING },
          },
          required: ["archetype", "coreNeed", "insight", "scentName", "scentNotes", "scentDescription", "recommendedActivity", "productRecommendation", "productUrl"],
          propertyOrdering: ["archetype", "coreNeed", "insight", "scentName", "scentNotes", "scentDescription", "recommendedActivity", "productRecommendation", "productUrl"]
        }
      }
    });

    // Access the text property directly (do not call as a function)
    if (!response || response.text === undefined) {
      throw new Error("Invalid response from Gemini API");
    }

    const resultText = response.text.trim();
    if (!resultText) {
      throw new Error("Empty response text from Gemini API");
    }

    const result = JSON.parse(resultText);
    return result;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    // Fallback result in case of failure or blocked content
    return {
      archetype: "尋找寧靜的行者",
      coreNeed: "Recharge",
      insight: "你在新的一年渴望平靜與自我修復。去年的忙碌讓你有些透支，現在是放慢腳步的時候。請給自己一點喘息的空間，在氣味中找回內心的平衡。",
      scentName: "月下林泉",
      scentNotes: ["檀香", "雪松", "冷泉"],
      scentDescription: "如深夜林間的一抹涼意，洗滌心靈的疲憊，帶給您沉靜而安心的力量。",
      recommendedActivity: "安排一場無目的地的森林散步，或是早起五分鐘進行深呼吸練習。",
      productRecommendation: "沉靜檀香系列室內擴香",
      productUrl: "https://tl5383.com.tw/"
    };
  }
};
