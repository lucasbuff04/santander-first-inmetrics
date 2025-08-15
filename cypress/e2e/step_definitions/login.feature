Feature: Login
  Como usuário do site Automation Exercise
  Quero realizar login e logout
  Para garantir que o acesso à conta funcione corretamente

  # Cenário 1: Login com sucesso
  Scenario: Login com sucesso
    Given que o usuário está na página de login
    When ele preenche o e-mail "contatolucasbuff@hotmail.com" e a senha "Teste@1234"
    And clica no botão de login
    Then ele deve ver a mensagem de sucesso

  # Cenário 2: Login com e-mail incorreto
  Scenario: Login com e-mail incorreto
    Given que o usuário está na página de login
    When ele preenche o e-mail incorreto
    And clica no botão de login
    Then ele deve ver a mensagem de erro

  # Cenário 3: Login com senha incorreta
  Scenario: Login com senha incorreta
    Given que o usuário está na página de login
    When ele preenche a senha incorreta
    And clica no botão de login
    Then ele deve ver a mensagem de erro

  # Cenário 4: Logout com sucesso
  Scenario: Logout com sucesso
    Given que o usuário está na página de login
    When ele insere o e-mail e a senha
    And clica no botão de login
    Then ele deve ver a mensagem
    When ele clicar no botão de logout
    Then ele deve ver a mensagem de login
