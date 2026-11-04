Casa do Hambúrguer

Aplicação web full stack de cardápio e pedidos para uma hamburgueria. O cliente cria uma conta, navega pelo cardápio por categoria, monta o carrinho e finaliza o pedido. O back-end é uma API REST em Node.js com autenticação por JWT, e os dados ficam em um banco PostgreSQL acessado com Prisma.

Status: em desenvolvimento. As funcionalidades já prontas e as próximas etapas estão na seção Roadmap.

Sumário
Tecnologias
Funcionalidades
Arquitetura e modelo de dados
Endpoints da API
Como rodar localmente
Estrutura de pastas
Roadmap
Autor
Tecnologias

Front-end

React 19 + TypeScript
Vite
React Router
Tailwind CSS
Lucide React (ícones)
Context API (usuário logado e itens do carrinho)

Back-end

Node.js + TypeScript (executado com tsx)
Express 5
Prisma ORM 7 com adapter pg
PostgreSQL
JWT (jsonwebtoken) e hash de senha com bcrypt
cookie-parser e cors
Funcionalidades

Já implementado

Cadastro de usuário (nome, e-mail, senha e CEP) com senha criptografada com bcrypt.
Login e logout com JWT armazenado em cookie.
Rota protegida /me para recuperar o usuário autenticado.
Rotas públicas no front-end redirecionando usuários já logados (PublicRoute).
Listagem de produtos do cardápio, filtrada por categoria: Hamburger, Bebidas e Porções.
Carrinho de compras: adicionar produto (incrementa a quantidade se o item já estiver no carrinho) e listar os itens do usuário.
Finalização de pedido: o back-end calcula o total a partir dos itens do carrinho, grava o pedido com seus itens (preço e quantidade no momento da compra) e esvazia o carrinho.
Perfil de administrador: o botão de excluir produto só aparece para admin, e a rota de exclusão valida a permissão no servidor.
Layout responsivo com Tailwind CSS.
Arquitetura e modelo de dados

O projeto é dividido em duas aplicações independentes dentro do mesmo repositório:

casa-do-hamburger/
├── back-end/ # API REST (Express + Prisma)
└── front-end/ # SPA (React + Vite)

O front-end se comunica com a API por fetch, enviando o cookie de autenticação (credentials: "include"). No back-end, o fluxo é: rotas → middleware de autenticação → controllers → Prisma → PostgreSQL.

Entidades (Prisma)

Modelo Descrição
User Usuário com nome, e-mail único, senha (hash), CEP e flag admin
Product Produto do cardápio: nome, descrição, preço, categoria e imagem
CartItem Item no carrinho de um usuário (produto + quantidade)
Order Pedido do usuário com status (padrão Pendente), total e data
OrderItem Item de um pedido, guardando quantidade e preço no momento da compra

Relacionamentos: um User tem vários CartItem e vários Order; um Order tem vários OrderItem; Product se relaciona com CartItem e OrderItem.

Endpoints da API

Base URL local: http://localhost:3000

Método Rota Auth Descrição
POST /register — Cria um novo usuário
POST /login — Autentica e grava o cookie com o JWT
GET /me Retorna o usuário autenticado
POST /logout Remove o cookie de autenticação
GET /get-products — Lista os produtos do cardápio
DELETE /delete-product/:id Remove um produto (somente administrador)
GET /get-cart-items Lista os itens do carrinho do usuário
POST /create-cart-item Adiciona um produto ao carrinho (productId)
POST /create-order Cria um pedido a partir do carrinho
Como rodar localmente
Pré-requisitos
Node.js 20.19 ou superior
PostgreSQL em execução
Git

1. Clonar o repositório
   bash
   git clone https://github.com/devMcouto/casa-do-hamburger.git
   cd casa-do-hamburger
2. Configurar e iniciar o back-end
   bash
   cd back-end
   npm install

Crie um arquivo .env dentro de back-end/ com as variáveis abaixo (use valores seus):

env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/casa_do_hamburger"
JWT_SECRET="uma-chave-secreta-longa-e-aleatoria"

Crie as tabelas e gere o Prisma Client:

bash
npx prisma migrate dev
npx prisma generate

Inicie a API (porta 3000):

bash
npm run dev
Cadastrar produtos no cardápio

Ainda não existe rota para criar produtos nem seed automático, então os produtos são cadastrados direto no banco. A forma mais simples é o Prisma Studio:

bash
npx prisma studio

Na tabela Product, crie registros usando uma das categorias Hamburger, Bebidas ou Porções. O campo price é um número inteiro em reais e o campo img recebe o caminho da imagem (as imagens ficam em front-end/public).

Para tornar um usuário administrador, altere o campo admin dele para true na tabela User.

4. Configurar e iniciar o front-end

Em outro terminal:

bash
cd front-end
npm install
npm run dev

Acesse http://localhost:5173.

O back-end libera CORS para http://localhost:5173, então o front-end precisa rodar nessa porta.

Scripts disponíveis
Pasta Comando O que faz
back-end npm run dev Inicia a API com recarga automática
front-end npm run dev Inicia o servidor de desenvolvimento
front-end npm run build Gera o build de produção
front-end npm run lint Executa o ESLint
Estrutura de pastas
casa-do-hamburger/
├── back-end/
│ ├── prisma/
│ │ ├── schema.prisma # Modelos do banco
│ │ └── migrations/ # Migrations
│ ├── src/
│ │ ├── controller/ # Regras de cada rota (user, product, cart item, order)
│ │ ├── middlewares/ # Autenticação via JWT
│ │ ├── db.ts # Conexão com o banco (Prisma + adapter pg)
│ │ └── routes.ts # Definição das rotas
│ ├── index.ts # Ponto de entrada do servidor
│ └── prisma.config.ts
└── front-end/
├── public/ # Imagens dos produtos e logo
└── src/
├── components/ # Header, Product, Cart, CartItem, Button, Input...
├── contexts/ # UserContext e CartItemsContext
├── pages/ # Home, Login, Register, Pedidos
├── types/ # Tipos TypeScript
├── utils/ # Funções utilitárias (formatação de preço)
└── router.tsx # Rotas da aplicação
Roadmap
Modelagem do banco com Prisma e PostgreSQL
Cadastro, login e logout com JWT
Listagem de produtos por categoria
Carrinho de compras
Criação de pedido a partir do carrinho
Exclusão de produto restrita a administrador
Página Pedidos consumindo os pedidos reais da API (hoje exibe dados de exemplo)
Alteração de status do pedido (Pendente, Retirado e Cancelado)
Cadastro e edição de produtos pelo administrador
Remover item e alterar a quantidade no carrinho
Variáveis de ambiente para a URL da API no front-end
Validação de dados nas rotas e tratamento de erros padronizado
Testes automatizados
Deploy (front-end e API)

Matheus Monteiro Couto Estudante de Cibersegurança e desenvolvedor back-end Node.js

GitHub: @devMcouto
LinkedIn: matheus-couto
