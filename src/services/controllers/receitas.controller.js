import { obterReceita } from "../util.js"; 

export const perguntaReceita = async (req, res) => {
    try {
        const { pergunta } = req.body;

        if (!pergunta || pergunta.trim() === "") {
            return res
                .status(400)
                .json({ erro: "Por favor, forneça uma pergunta válida." });
        }

        const resposta = await obterReceita(pergunta);

        res.json({ resposta });
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao obter a receita. Tente novamente mais tarde.",
        });
    }
};
