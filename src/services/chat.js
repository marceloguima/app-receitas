import express from "express";
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import cors from 'cors';

const GEMINI_KEY = process.env.GEMINI_KEY;

const app = express();
const PORT = 3001;

app.use(cors({origin: 'localhost:3000'}));
app.use(express.json());

const ai = new GoogleGenAI({
    apiKey: GEMINI_KEY
});


// rota teste
app.get("/api/saudacao", (req, res) => {
    res.json({ mensagem: "Olá! Bem-vindo à API de Receitas!" });
});


app.post("/api/gerar-receita", async (req, res) => {
    const { ingredientes } = req.body;

    if (!ingredientes || ingredientes.trim() === "") {
        return res.status(400).json({ erro: "Por favor, forneça os ingredientes." });
    }

    const prompt = `Crie uma receita detalhada usando os seguintes ingredientes: ${ingredientes}. Inclua o nome da receita e o modo de preparo.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        res.json({ receita: response.text });

    } catch (error) {
        console.error("Erro ao gerar receita:", error);
        res.status(500).json({ erro: "Erro ao gerar a receita. Tente novamente mais tarde." });
    }
});





app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Crie uma receita com os ingredientes ${ingredientes}`,
    });
    console.log(response.text);
}

main();
