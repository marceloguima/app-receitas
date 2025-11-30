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
        titulo: "Bife acebolado",
        categoria: "prato principal",
        tempoPreparo: 30,
        porcoes: 4,
        imagem: "https://cdn.pixabay.com/photo/2016/09/15/06/16/rumpsteak-1671069_960_720.jpg",
    },

    {
        id: 2,
        titulo: "Arroz básico soltinho",
        categoria: "Acompanhamento",
        tempoPreparo: 25,
        porcoes: 4,
        imagem: "https://cdn.pixabay.com/photo/2018/07/13/00/14/rice-3534664_640.jpg",
    },
];

export const  listarReceitas = (req, res) => {
    const q = (req.query.q || "").toLowerCase().trim();

    let resultado = receitasMocadas;

    if (q) {
        resultado = receitasMocadas.filter((receita) =>
            receita.titulo.toLowerCase().includes(q)
        );
    }
    res.json(resultado)
};
