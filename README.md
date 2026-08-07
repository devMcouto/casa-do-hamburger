#  Casa do Hamburger

Sistema Full Stack para gerenciamento de uma hamburgueria.

Desenvolvido utilizando React, Node.js, Express, PostgreSQL e Prisma ORM, com foco no desenvolvimento de APIs REST, autenticação de usuários, integração entre front-end e back-end e gerenciamento de banco de dados.

##  Tecnologias

### Front-end

* React
* TypeScript
* React Router
* Tailwind CSS
* Fetch API

### Back-end

* Node.js
* Express
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT (JSON Web Token)
* Bcrypt

##  Funcionalidades

* Cadastro de usuários
* Login com autenticação JWT
* Gerenciamento de sessão por Cookies
* Cadastro de produtos
* Listagem de produtos
* Integração entre Front-end e Back-end
* Comunicação através de API REST

##  Estrutura do projeto

```
casa-do-hamburger/
│
├── front-end/
│   ├── src/
│   └── ...
│
├── back-end/
│   ├── prisma/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── ...
│
└── README.md
```

##  Como executar

### Clone o repositório

```bash
git clone https://github.com/devMcouto/casa-do-hamburger.git
```

### Entre na pasta do projeto

```bash
cd casa-do-hamburger
```

### Back-end

```bash
cd back-end
npm install
```

Configure o arquivo `.env` com as variáveis necessárias.

Execute as migrations:

```bash
npx prisma migrate dev
```

Inicie o servidor:

```bash
npm run dev
```

---

### Front-end

```bash
cd front-end
npm install
npm run dev
```

##  Objetivos do projeto

Este projeto foi desenvolvido como estudo para colocar em prática conceitos como:

* Arquitetura de aplicações Full Stack
* Desenvolvimento de APIs REST
* Autenticação e autorização
* Integração com banco de dados utilizando Prisma ORM
* Consumo de APIs no React
* Organização e estruturação de projetos
* Boas práticas utilizando TypeScript

##  Status

 Projeto em desenvolvimento.

Novas funcionalidades serão adicionadas conforme a evolução dos estudos.

##  Autor

**Matheus Couto**

* GitHub: https://github.com/devMcouto
* LinkedIn: linkedin.com/in/matheus-couto-66b4943a9 
