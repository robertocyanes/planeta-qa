# 🚀 Planeta QA - API Testing Project

Projeto de automação de testes para API REST utilizando Spring Boot e Cypress, com integração contínua via GitHub Actions.

---

# 📌 Objetivo

Este projeto tem como objetivo demonstrar uma arquitetura de testes automatizados escalável para APIs REST, cobrindo:

- Testes unitários (backend)
- Testes de integração (API)
- Testes automatizados E2E com Cypress
- Validação de fluxo completo de dados
- Pipeline CI/CD com GitHub Actions

---

# 🧰 Stack utilizada

## Backend
- Java 21
- Spring Boot
- Spring Data JPA
- H2 Database (memória)
- Maven

## Testes
- Cypress (API testing / E2E)
- JUnit (testes unitários no backend)

## DevOps
- GitHub Actions (CI/CD)

---

# 🟡 Arquitetura

O projeto segue uma arquitetura simples e escalável:


Controller → Service → Repository → Database (H2)
↓
Cypress (testes externos)


---

# 🟡 Tipos de testes implementados

## ✔ Testes unitários (backend)

- Validação de regras de negócio
- Testes de service layer
- Testes de repository

Exemplo:
- criação de produto
- validação de campos obrigatórios

---

## 🟡 Testes de integração (API)

Testam a integração completa do sistema:

- POST /products
- GET /products
- GET /products/{id}

Validam:
- status code
- payload
- persistência no banco

---

## 🟡 Testes automatizados (Cypress)

Cobrem o fluxo completo da API como cliente externo:

- criação de produto via API
- validação de retorno
- listagem de produtos
- busca por ID

---

## 🟡 Testes end-to-end (conceito aplicado)

Simulação do comportamento real do consumidor da API:

- requisição → persistência → consulta → validação

---

# ⚙️ Escalabilidade do projeto

Este projeto foi estruturado para permitir evolução fácil:

- Separação de responsabilidades (Controller / Service / Repository)
- Testes desacoplados da implementação
- Cypress rodando independente do backend
- Possibilidade de migração para Docker
- CI/CD pronto para expansão

---

# 🔄 CI/CD (GitHub Actions)

O pipeline automatiza:

1. Build do backend
2. Inicialização da aplicação Spring Boot
3. Instalação das dependências Cypress
4. Execução dos testes automatizados
5. Validação do sistema completo

---

# ▶️ Como rodar o projeto

## Backend

```bash
cd planeta-qa
mvn spring-boot:run

API disponível em:

http://localhost:8081
Testes Cypress
cd planeta-qa-e2e
npm install
npx cypress run

🟡 Qualidade de software aplicada
Este projeto aplica boas práticas de QA:

- Automação de testes repetíveis
- Separação entre backend e testes
- Validação de contratos da API
- Cobertura de cenários positivos
- Estrutura preparada para testes negativos (expansão futura)

Github: robertocyanes
