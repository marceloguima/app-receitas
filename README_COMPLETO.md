# App Receitas

Projeto: App Receitas (Vite + React, JavaScript)

Descrição

-   Um site de receitas que consome receitas de uma API pública e também oferece um gerador de receitas por IA.
-   Objetivo deste repositório: fornecer uma scaffold limpa para você aprender e implementar cada parte passo a passo.

Estrutura principal

-   `index.html` — ponto de entrada.
-   `package.json` — scripts e dependências.
-   `src/`
    -   `pages/` — páginas da aplicação (cada página terá sua própria pasta ou arquivo)
    -   `components/` — componentes reutilizáveis (cada componente em sua pasta com `index.jsx` e `styles.css`)
    -   `services/` — chamadas a APIs (`api.js`, `ai.js`)
    -   `hooks/` — hooks customizados
    -   `utils/` — utilitários e helpers
    -   `assets/` — imagens e arquivos estáticos
    -   `styles/` — estilos globais e variáveis

Páginas planejadas

-   Home: destaque, categorias, receitas em destaque e acesso ao gerador de IA.
-   Recipes: lista/pesquisa (fetch de API, filtros, paginação ou infinite scroll).
-   Recipe Detail: visualização completa de uma receita (ingredientes, preparo, tempo, porções, avaliações).
-   AI Recipe Generator: interface para gerar receitas usando IA (entrada de ingredientes, restrições, estilo de culinária).
-   Favorites: receitas salvas localmente ou no backend.
-   Settings/Profile: preferências do usuário, gerenciamento de tokens/API.
-   About: informações do projeto e fontes.

Componentes principais (placeholder)

-   `Header/` — logo, navegação, ícone de favoritos, link para gerador IA.
-   `Footer/` — links úteis e créditos.
-   `Button/` — componente botão reutilizável (variants: primary, secondary).
-   `RecipeCard/` — card com imagem, título, tempo e ação de favoritar.
-   `RecipeList/` — grid/lista de `RecipeCard` com paginação.
-   `SearchBar/` — busca com submit e sugestões.
-   `Loader/` — spinner ou skeletons.
-   `Modal/` — diálogos e confirmações.

Como rodar localmente (PowerShell)

```powershell
cd "C:/Users/User/OneDrive/Área de Trabalho/estudos/projetos-2025/projrtos-js/projetos-novembro/app-receitas"
npm install
npm run dev
```

Build e preview

```powershell
npm run build
npm run preview
```

Conexão com GitHub

-   Remote usado: `git@github.com:marceloguima/app-receitas.git` (branch `main`).
-   Para clonar via SSH: `git clone git@github.com:marceloguima/app-receitas.git`.

Boas práticas e próximos passos sugeridos

-   Implementar primeiro o layout e `Header`, `Footer`, `Button` e `RecipeCard`.
-   Usar `src/services/api.js` para encapsular chamadas HTTP à API de receitas.
-   Manter segredos (tokens de API) fora do repositório — use variáveis de ambiente.
-   Adicionar lint (`eslint`) e formatação (`prettier`) antes de desenvolver em equipe.
-   Configurar CI (GitHub Actions) para rodar lint e build no push/PR.

Notas para aprendizado

-   Os componentes foram criados como placeholders (comentários) para não interferir no aprendizado — você pode abrir cada `index.jsx` e `styles.css` nas pastas de componentes e preencher gradualmente.
-   Se quiser, eu posso implementar um componente de exemplo e explicar cada linha.

Licença

-   Adicione aqui a licença quando decidir (ex.: MIT).

Contato

-   Adicione seu e-mail ou link do GitHub para contato.
