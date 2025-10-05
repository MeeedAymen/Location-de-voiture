import { GoogleGenAI } from "@google/genai";
import type { Locale } from '../types';

let ai: GoogleGenAI | undefined = undefined;

/**
 * Lazily initializes and returns the GoogleGenAI client.
 * This function includes robust checks to prevent crashes in browser environments
 * where environment variables are not available.
 */
function getAiClient(): GoogleGenAI | undefined {
    if (ai) {
        return ai;
    }

    let apiKey: string | undefined = undefined;
    
    try {
        // This structure safely checks for process.env.API_KEY without
        // causing a ReferenceError if 'process' is not defined.
        if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
            apiKey = process.env.API_KEY;
        }
    } catch (e) {
        // In some sandboxed environments, even checking for 'process' can throw.
        // This catch block ensures the app doesn't crash.
        console.error("Could not access environment variables:", e);
        return undefined;
    }

    if (!apiKey) {
        console.error("AI service is not available. API key is not configured.");
        return undefined;
    }

    try {
        ai = new GoogleGenAI({ apiKey });
        return ai;
    } catch (error) {
        console.error("Could not initialize AI Service:", error);
        return undefined;
    }
}

const languageMap = {
    en: 'English',
    fr: 'French',
    ar: 'Arabic'
};

export const generateItinerary = async (destination: string, locale: Locale): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "AI service is not available. Please ensure the API key is configured correctly.";
  }
  
  const languageName = languageMap[locale];

  try {
    const prompt = `You are an expert travel guide for Morocco. Create a concise and exciting 3-day travel itinerary for a tourist visiting ${destination}. The tourist has a rental car. Focus on scenic drives, key attractions, and suggest one local dish to try each day. Format the response in simple markdown with headings for each day. The response must be in ${languageName}.`;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return "We couldn't generate an itinerary at this moment. Please try again later.";
  }
};
