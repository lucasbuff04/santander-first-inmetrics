import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

let response;

Given("que eu envio uma requisição GET para a API do Trello", () => {
  cy.request({
    method: "GET",
    url: "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
  }).then((res) => {
    response = res;
  });
});

Then("o status code deve ser 200", () => {
  expect(response.status).to.eq(200);
});

And('exibir o campo "name" da estrutura "list"', () => {
  const nomeLista = response.body.data.list.name;
  cy.log("Nome da lista:", nomeLista);
  expect(nomeLista).to.be.a("string");
});
