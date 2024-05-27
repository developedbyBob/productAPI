ProductAPI
==========

ProductAPI é uma API RESTful para gerenciamento de produtos, construída com Node.js e Prisma ORM.

Introdução
----------

Este projeto fornece uma API para realizar operações CRUD (Create, Read, Update, Delete) em produtos. É um exemplo básico de como integrar o Express com o Prisma para gerenciar um banco de dados SQLite (ou qualquer outro banco suportado pelo Prisma).

Tecnologias Utilizadas
----------------------

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Prisma ORM](https://www.prisma.io/)

Estrutura do Projeto
--------------------

-   routes/: Define as rotas da API.
-   prisma/: Contém os arquivos de configuração do Prisma, incluindo o esquema do banco de dados.
-   index.js: Ponto de entrada da aplicação.

Instalação
----------

Siga as etapas abaixo para configurar e executar o projeto localmente.

1.  Clone o repositório:

    `git clone https://github.com/developedbyBob/productAPI.git
    cd productAPI`

2.  Instale as dependências:

    `npm install`

3.  Configure o Prisma:

    `npx prisma migrate dev --name init`

4.  Inicie o servidor:

    `npm start`

O servidor estará em execução em `http://localhost:3000`.

Uso
---

A API possui as seguintes rotas para gerenciar produtos:

### Rotas da API

-   Criar um produto

    `POST /products`

    -   Body: `{ "name": "Produto 1", "description": "Descrição do produto", "price": 100.0 }`
-   Listar todos os produtos

    `GET /products`

-   Atualizar um produto

    `PUT /products/:id`

    -   Body: `{ "name": "Produto Atualizado", "description": "Nova descrição", "price": 150.0 }`
-   Deletar um produto

    `DELETE /products/:id`

### Exemplos de Uso

#### Criar um Produto

`curl -X POST http://localhost:3000/products\
-H "Content-Type: application/json"\
-d '{"name": "Produto 1", "description": "Descrição do produto", "price": 100.0}'`

#### Listar Produtos

`curl http://localhost:3000/products`

#### Atualizar um Produto

`curl -X PUT http://localhost:3000/products/1\
-H "Content-Type: application/json"\
-d '{"name": "Produto Atualizado", "description": "Nova descrição", "price": 150.0}'`

#### Deletar um Produto

`curl -X DELETE http://localhost:3000/products/1`

Contribuição
------------

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1.  Fork o projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3.  Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4.  Faça o push para a branch (`git push origin feature/nome-da-feature`).
5.  Abra um Pull Request.

Licença
-------

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

Autor
-----

[](https://github.com/developedbyBob/to-do-list#autor)

Este projeto foi desenvolvido por [Bob](https://github.com/developedbyBob).
* * * * *