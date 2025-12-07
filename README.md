## Site de receitas

Este é um projeto de um site de receitas com integração de IA. O usuário pode explorar receitas prontas através de uma API externa, fazer buscas por ingredientes ou tipo de prato, e também usar um assistente de IA para gerar receitas personalizadas com base no que tem na cozinha.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** React, Vite, JavaScript, HTML5, CSS3
* **Backend/API:** Node.js, Express, Axios
* **Integração IA:** Google Gemini API (via função utilitária para geração de receitas) 
* **API de receitas (Home):** API-Receitas – https://api-receitas-pi.vercel.app, desenvolvida por Denilson Rabelo, utilizada como fonte dos dados de receitas exibidos na home e na busca.
* **Controle de versão:** Git, GitHub


A seguir, confira as principais telas da aplicação:

### 🖼️ Preview das telas
### Home – listagem e busca de receitas

Tela inicial com barra de busca, destaque visual e cards de receitas retornadas pela API externa.

![Home com receitas do dia](./docs/tela1.png)

---

### Home – resultado de busca

Após buscar por um termo (ex.: "frango"), a home exibe apenas as receitas correspondentes ao filtro.

![Resultado de busca por frango](./docs/tela2.png)

---

### Assistente de IA – estado de carregamento

Enquanto a IA está gerando a receita, a interface mostra um estado de "gerando sua receita, aguarde...".

![Tela de carregamento da IA](./docs/tela3.png)

---

### Assistente de IA – receita gerada

Tela do assistente de receitas com IA, onde o usuário envia uma mensagem (por exemplo, "bife") e recebe uma receita detalhada gerada automaticamente.

![Chat com IA mostrando receita de bife](./docs/tela4.png)


## 🚀 Como rodar o projeto

Para rodar o App Receitas localmente, considerando que já tenha o NODE instalado na sua máquina, execute os comandos abaixo:

1. Clonar o repositório e acessar a pasta do projeto:


2. Instalar as dependências do frontend (na pasta raiz) em app-receitas dê o comando "npm install":


3. Criar o arquivo `.env` na raiz do projeto (`app-receitas`) e adicione a URL da API: VITE_API_URL=http://localhost:3001/api/
    


4. Iniciar o frontend: "npm run dev"

#Rodar o servidor
5. Em outro terminal, ir para a pasta do backend "cd src/services", instalar dependências "npm install" e subir o servidor "npm run start".











