## Estrutura

A estrutura contém a pasta modules que são divididas pelas entidades users e vehicle, sendo os controllers, dtos, models, repositories e services. Shared é a parte que é compartilhada que nela contém os providers e infra, o providers são funções isoladas, com isso o isolamento do bcrypt(método de criptografia hash). A parte de infra está as subpastas connection, middlwares e routes. A parte de config é onde ficaram as configurações do JWT e AppErros.

## Funcionalidades do Sistema

- Deve ser possível usuário se cadastrar.
- Deve ser possível usuário cadastrar um veículo.
- Deve ser possível usuário deletar um veículo.
- Deve ser possível usuário atualizar dados de um veículo.
- Deve ser possível usuário favoritar veículo.
- Deve ser possível usuário desfavoritar um veículo.
- Deve ser possível listar todos os veículos cadastrados por usuário.
- Deve ser possível listar todos os veículos cadastrados.
- Deve ser possível filtrar um veículo.

## Ferramentas e Tecnologias Utilizadas

- Conceitos de boas práticas e qualidade no código, usando Design Patterns, Clean Architecture, Domain Driven Design (DDD) e Princípios SOLID, além de introduzir Testes Automatizados com o framework Jest e autenticação via JWT Token.

- [Server 💻](./server):
  - [Express](https://expressjs.com/pt-br/)
  - [Typescript](https://www.typescriptlang.org/)
  - [TypeORM](https://typeorm.io/)
  - [Jest](https://jestjs.io/pt-BR/)
  - [Docker](https://www.docker.com/)
  - [PostgreSQL](https://www.postgresql.org/)
