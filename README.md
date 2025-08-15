# santander-first-inmetrics
teste inmetics
# Testes Automatizados - Cypress + Cucumber

Este projeto contém testes automatizados desenvolvidos com **Cypress** e **Cucumber**, seguindo a abordagem **BDD (Behavior Driven Development)** para facilitar a compreensão e manter rastreabilidade entre requisitos e automação.

## 📋 Descrição

Os testes implementados cobrem três áreas principais do sistema:

1. **Integração com API (Trello)**  
   - Consulta de informações via requisição GET.
   - Validação de status code.
   - Extração e exibição de campos específicos do JSON retornado.

2. **Login e Logout (Automation Exercise)**  
   - Login com credenciais válidas.
   - Login com credenciais inválidas (e-mail e senha incorretos).
   - Logout com sucesso.

3. **Fluxo de Produtos (Automation Exercise)**  
   - Busca de produtos.
   - Adição e remoção de produtos do carrinho.
   - Validação de valores e produtos no checkout.
   - Fluxo de pagamento e confirmação de pedido.

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) (v18 ou superior recomendado)
- [Cypress](https://www.cypress.io/) (versão 12+)
- [Cucumber (cypress-cucumber-preprocessor)](https://github.com/badeball/cypress-cucumber-preprocessor)

## 📂 Estrutura do Projeto

projeto
┣ 📂 cypress
┃ ┣ 📂 e2e
┃ ┃ ┣ 📂 step_definitions
┃ ┃ ┣ ┣ 📂 API
┃ ┃ ┃ ┣ api.js # Cenário Api Trello
┃ ┃ ┣ 📂 login
┃ ┃ ┃ ┣ login.js # Cenários de Login e Logout
┃ ┃ ┣ 📂 products
┃ ┃ ┃ ┣ produtos.js # Cenários de produtos
┃ ┃ ┃ ┣ api.feature # Cenário Api Trello
┃ ┃ ┃ ┣ login.feature # Cenários de Login e Logout
┃ ┃ ┃ ┣ products.feature # Cenários de produtos
┃ ┣ 📂 support
┃ ┃ ┗ commands.js # Comandos customizados
┣ cypress.config.js # Configuração do Cypress
┣ package.json # Dependências e scripts
┗ README.md


## ▶ Como Executar

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/lucasbuff04/santander-first-inmetrics
   cd santander-first-inmetrics

2. **Instalar dependências**
-> npm install
-> npm cypress install
-> npm install @badeball/cypress-cucumber-preprocessor --save-dev

3. **Executar os testes no modo interativo**
-> npx cypress open

4. **Executar os testes no modo headless**
-> npx cypress run

## Tabela de Rastreabilidade
| ID     | Funcionalidade | Nome do Cenário| Descrição                                                                      |
| ------ | -------------- | ---------------------------| 
| TRE-01 | API Trello | Consultar campo "name" da lista| Envia GET para API do Trello e valida o campo `name` dentro de `list`.|
| LOG-01 | Login | Login com sucesso | Realiza login com credenciais válidas e valida mensagem de sucesso.|
| LOG-02 | Login | Login com e-mail incorreto| Tenta login com e-mail inválido e valida mensagem de erro.|
| LOG-03 | Login | Login com senha incorreta| Tenta login com senha inválida e valida mensagem de erro.|
| LOG-04 | Login | Logout com sucesso| Realiza login e em seguida efetua logout, validando mensagens.|
| PRO-01 | Produtos | Realizar busca de produto| Busca produto "Men Tshirt" e valida resultados.|
| PRO-02 | Produtos | Pesquisa e adicionar ao carrinho| Busca produto "Men Tshirt", adiciona ao carrinho e valida mensagem.|
| PRO-03 | Produtos | Adicionar ao carrinho e remover| Adiciona "Men Tshirt" ao carrinho, remove e valida mensagem de carrinho zio.|
| PRO-04 | Produtos | Validar produtos e valores no pagamento| Adiciona produto ao carrinho, valida preços e totais no checkout.|
| PRO-05 |Produtos | Validar método de pagamento e confirmação de pedido | Executa fluxo completo de compra até a confirmação do pedido.|

## Exemplos de Cenários
-> Trello
Scenario: Consultar campo "name" da lista no Trello
  Given que eu envio uma requisição GET para a API do Trello
  Then o status code deve ser 200
  And exibir o campo "name" da estrutura "list"

-> Login
Scenario: Login com sucesso
  Given que o usuário está na página de login
  When ele preenche o e-mail "usuario@teste.com" e a senha "Senha@123"
  And clica no botão de login
  Then ele deve ver a mensagem de sucesso

-> Produtos
Scenario: Validar método de pagamento e confirmação de pedido
  Given que o usuário está logado com o e-mail e a senha
  When ele acessar a página de produtos
  And pesquisar pelo produto "Men Tshirt"
  And adicionar o produto ao carrinho
  Then ele deve ver a mensagem "Your product has been added to cart."
  ...

✅ Boas Práticas Utilizadas

Organização dos cenários por funcionalidade.

Separação de arquivos .feature (cenários) e .js (steps).

Uso de variáveis para reuso de dados.

Validação de status HTTP, elementos e mensagens.

Estrutura comentada para facilitar manutenção.

Autor: Lucas Buff
Data: Agosto/2025
