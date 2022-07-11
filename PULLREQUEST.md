#

## Estrutura do projeto

    src
      ├── @types/ 
      ├── config/
        ├ errors/
      ├── modules/
        ├─ users/
            ├ controllers/
            ├ dtos/
            ├ models/
            ├─ repositories/
                ├ implementations/
                ├ in-memory/
            ├─ services/
                ├ tests/
        ├─ vehicles/
            ├ controllers/
            ├ dtos/
            ├ models/
            ├─ repositories/
                ├ implementations/
                ├ in-memory/
            ├─ services/
                ├ tests/
      ├── shared/
        ├─ infra/
            ├─ connection/
                ├ migrations/
                ├ typeorm/
            ├ middlewares/
            ├ routes/
        ├─ providers/
            ├ bcrypt/
      ├ app.ts  
      └ server.ts     

#

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
