Feature: Consulta de dados na API do Trello

  Scenario: Consultar campo "name" da lista no Trello
    Given que eu envio uma requisição GET para a API do Trello
    Then o status code deve ser 200
    And exibir o campo "name" da estrutura "list"
