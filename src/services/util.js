import { GoogleGenAI } from "@google/genai";
import 'dotenv/config'; 

// 1. INICIALIZAÇÃO DA IA (Chave e Cliente)
const GEMINI_KEY = process.env.GEMINI_KEY;

const CHAVE_LIMPA = GEMINI_KEY ? GEMINI_KEY.trim() : null; 


if (!CHAVE_LIMPA) {
    console.error("FATAL: Variável de ambiente GEMINI_KEY não encontrada. Verifique o arquivo .env.");
    // Saída forçada se a chave secreta faltar
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: CHAVE_LIMPA });

// 2. PROMPT DE SISTEMA
const SYSTEM_PROMPT = `Você é um chef de cozinha, seja direto, apenas diga o necessário para a receita. Crie uma receita apenas com.`;

// 3. FUNÇÃO DE CHAMADA DA API (Exportada para uso no Controller)
export const obterReceita = async (pergunta) => {
    const fullPrompt = `${SYSTEM_PROMPT}\n\n--- INSTRUÇÃO DO UTILIZADOR ---\n\nPergunta: ${pergunta}`;


    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            // Passa o prompt e a pergunta do usuário para a API
            contents: [
                { 
                    role: "user",
                    parts: [{ text: fullPrompt }]
                }
            ],
          temperature: 0.2
        });

        // Retorna o texto puro da receita
        return response.text; 
    } catch (error) {
        console.error("Erro ao gerar receita na API Gemini:", error);
        throw new Error("Erro ao gerar a receita. Tente novamente mais tarde.");
    }
};