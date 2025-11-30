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

const receitasMocadas = [
    {
        id: 1,
        titulo: "Prato principal",
        categoria: "prato principal",
        tempoPreparo: 30,
        porcoes: 4,
        imagem: "https://via.placeholder.com/400x300?text=Bife+acebolado",
    },

    {
        id: 2,
        titulo: "Arroz básico soltinho",
        categoria: "Acompanhamento",
        tempoPreparo: 25,
        porcoes: 4,
        imagem: "https://via.placeholder.com/400x300?text=Arroz",
    },
];

export const listarReceitas = (req, res) => {
    const q = (req.query.q || "").toLowerCase().trim();

    let resultado = receitasMocadas;

    if (q) {
        resultado = receitasMocadas.filter(() =>
            receitasMocadas.titulo.toLowerCase().inclides(q)
        );
    }
    res.json(resultado)
};
