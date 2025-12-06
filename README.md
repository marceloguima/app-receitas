# App Receitas

Aplicação web para buscar, explorar e **gerar receitas com IA** de forma simples e visual. O projeto é dividido em **frontend** (React) e **backend** (Node/Express), que consome uma API pública de receitas e expõe também uma rota para geração de receitas via modelo de IA.[web:78]

---

## 🧩 Visão geral do projeto

O **App Receitas** permite que o usuário:

- Veja uma listagem de receitas em cards, com imagem, título e informações básicas.  
- Busque receitas usando a barra de pesquisa na home (por nome ou tipo).  
- Acesse uma área específica de **“Crie com a IA”**, onde o usuário informa ingredientes ou uma ideia de prato e recebe uma receita completa gerada dinamicamente.  

### Arquitetura

- **Frontend (React)**  
  - Páginas: Home (lista + busca), página da IA, página de detalhes (breve).  
  - Componentes: Header com barra de busca, cards de receita, componentes de loading/skeleton, etc.  
  - Consome as rotas do backend `/api/receitas` via Axios.

- **Backend (Node + Express)**  
  - `GET /api/receitas` → lista/busca receitas consumindo a API-Receitas (`https://api-receitas-pi.vercel.app`).[web:78]  
  - `POST /api/receitas` → recebe uma `pergunta` (prompt do usuário) e chama uma função utilitária que integra com o modelo de IA para gerar uma receita completa (nome, ingredientes, modo de preparo, dicas etc.).  
  - Faz o papel de “orquestrador”, isolando o front dos detalhes da API externa e da IA.


