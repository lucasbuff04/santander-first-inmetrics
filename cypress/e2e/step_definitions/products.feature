Feature: Página de produtos
  Como usuário do site Automation Exercise
  Quero pesquisar produtos, adicioná-los ao carrinho e realizar pagamentos
  Para garantir que a compra seja concluída corretamente

  # Cenário 1: Realizar busca de produto
  Scenario: Realizar busca de produto "Men Tshirt"
    Given que o usuário está logado com o e-mail e a senha
    When ele acessa a página de produtos
    And realiza a busca pelo produto "Men Tshirt"
    Then ele deve ver os resultados da busca

  # Cenário 2: Pesquisa e adicionar ao carrinho
  Scenario: Realiza Pesquisa por "Men Tshirt" e adicionar ao carrinho
    Given que o usuário está logado com o e-mail e a senha
    When ele acessa a página de produtos
    And realiza a busca pelo produto "Men Tshirt"
    And ele deve ver os resultados da busca e adicionar ao carrinho
    Then ele deve ver a mensagem

  # Cenário 3: Adicionar ao carrinho e remover
  Scenario: Pesquisar "Men Tshirt", adicionar ao carrinho e excluir
    Given que o usuário está logado com o e-mail e a senha
    When ele acessar a página de produtos
    And pesquisar pelo produto "Men Tshirt"
    And adicionar o produto ao carrinho
    Then o produto deve estar visível no carrinho
    When ele visualizar o carrinho
    And ele excluir o produto do carrinho
    Then ele deve ver a mensagem "Cart is empty! Click here to buy products."

  # Cenário 4: Validar produtos e valores no pagamento
  Scenario: Validar produtos e valores no pagamento
    Given que o usuário está logado com o e-mail e a senha
    When ele acessar a página de produtos
    And pesquisar pelo produto "Men Tshirt"
    And adicionar o produto ao carrinho
    Then ele deve ver a mensagem "Your product has been added to cart."
    When ele visualizar o carrinho
    Then o produto "Men Tshirt" com preço "Rs. 400" deve estar visível
    When ele prosseguir para o checkout
    Then ele deve ver os detalhes do endereço
    And ele deve ver o resumo do pedido
    And o produto e o preço corretos no resumo
    And o valor total deve ser calculado corretamente
    And o valor total deve estar visível

  # Cenário 5: Validar método de pagamento e confirmação de pedido
  Scenario: Validar método de pagamento e confirmação de pedido
    Given que o usuário está logado com o e-mail e a senha
    When ele acessar a página de produtos
    And pesquisar pelo produto "Men Tshirt"
    And adicionar o produto ao carrinho
    Then ele deve ver a mensagem "Your product has been added to cart."
    When ele visualizar o carrinho
    Then o produto "Men Tshirt" com preço "Rs. 400" deve estar visível
    When ele prosseguir para o checkout
    Then ele deve ver os detalhes do endereço
    And ele deve ver o resumo do pedido
    And o produto e o preço corretos no resumo
    And o valor total deve ser calculado corretamente
    And o valor total deve estar visível
    When ele prosseguir para a tela de pagamento
    Then ele deve ver a tela de pagamento
    When ele preencher os dados do cartão
    And confirmar o pagamento
    Then ele deve ver a mensagem de pedido realizado com sucesso
    When ele clicar no botão continuar
    Then ele deve ver a página inicial
