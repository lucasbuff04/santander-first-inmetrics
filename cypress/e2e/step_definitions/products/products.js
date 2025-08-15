import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

// =====================
// Função de login
// =====================
function login() {
  cy.visit("https://www.automationexercise.com/login");
  cy.get('[data-qa="login-email"]').type('contatolucasbuff@hotmail.com');
  cy.get('[data-qa="login-password"]').type('Teste@1234');
  cy.get('[data-qa="login-button"]').click();
  cy.contains('Logged in as lucas de araujo buff', { timeout: 5000 }).should('be.visible');
}

// =====================
// Realizar busca de produto "Men Tshirt"
// =====================
Given('que o usuário está logado com o e-mail e a senha', () => {
  login();
});

When('ele acessa a página de produtos', () => {
  cy.contains(' Products').click({ force: true });
});

And('realiza a busca pelo produto "Men Tshirt"', () => {
  cy.get('#search_product').type('Men Tshirt');
  cy.get('#submit_search').click();
});

Then('ele deve ver os resultados da busca', () => {
  cy.contains('Men Tshirt').should('be.visible');
});

// =====================
// Realiza Pesquisa por "Men Tshirt" e adicionar ao carrinho
// =====================
And('ele deve ver os resultados da busca e adicionar ao carrinho', () => {
  cy.contains('Men Tshirt').should('be.visible');
  cy.contains('Add to cart').click();
});

Then('ele deve ver a mensagem', () => {
  cy.contains('Your product has been added to cart.').should('be.visible');
});

// =====================
// Pesquisar "Men Tshirt", adicionar ao carrinho e excluir
// =====================
When('ele acessar a página de produtos', () => {
  cy.contains(' Products').click({ force: true });
});

When('pesquisar pelo produto "Men Tshirt"', () => {
  cy.get('#search_product').type('Men Tshirt');
  cy.get('#submit_search').click();
});

When('adicionar o produto ao carrinho', () => {
  cy.contains('Add to cart').click();
});

Then('o produto deve estar visível no carrinho', () => {
  cy.contains('Men Tshirt').should('be.visible');
});

When('ele visualizar o carrinho', () => {
  cy.contains('View Cart').click({ force: true });
});

When('ele excluir o produto do carrinho', () => {
  cy.get('.cart_quantity_delete').click();
});

Then('ele deve ver a mensagem "Cart is empty! Click here to buy products."', () => {
  cy.contains('Cart is empty! Click here to buy products.').should('be.visible');
});

// =====================
// Validar produtos e valores no pagamento
// =====================
Then('ele deve ver a mensagem "Your product has been added to cart."', () => {
  cy.contains('Your product has been added to cart.').should('be.visible');
});

Then('o produto "Men Tshirt" com preço "Rs. 400" deve estar visível', () => {
  cy.contains('Men Tshirt').should('be.visible');
  cy.contains('Rs. 400').should('be.visible');
});

When('ele prosseguir para o checkout', () => {
  cy.get('.check_out').click();
});

Then('ele deve ver os detalhes do endereço', () => {
  cy.contains('Address Details').should('be.visible');
});

Then('ele deve ver o resumo do pedido', () => {
  cy.scrollTo('0%', '20%');
  cy.contains('Review Your Order').should('be.visible');
});

Then('o produto e o preço corretos no resumo', () => {
  cy.contains('Men Tshirt').should('be.visible');
  cy.contains('Rs. 400').should('be.visible');
});

Then('o valor total deve ser calculado corretamente', () => {
  cy.get('.cart_quantity').then(($quantidades) => {
    let totalItens = 0;
    Array.from($quantidades).forEach((el) => {
      const qtd = Number(el.innerText.trim()) || 0;
      totalItens += qtd;
    });
    const valorEsperado = totalItens * 400;
    cy.get('.cart_total_price')
      .first()
      .invoke('text')
      .then((totalText) => {
        const cleanText = totalText.replace(/Rs\.?\s*/gi, "").replace(/[^\d]/g, "");
        const valorTotal = Number(cleanText) || 0;
        expect(valorTotal).to.eq(valorEsperado);
      });
  });
});

Then('o valor total deve estar visível', () => {
  cy.contains('Total Amount').should('be.visible');
});

// =====================
// Validar método de pagamento e confirmação de pedido
// =====================
When('ele prosseguir para a tela de pagamento', () => {
  cy.scrollTo('0%', '70%');
  cy.get('.check_out').click({ force: true });
});

Then('ele deve ver a tela de pagamento', () => {
  cy.contains('Payment').should('be.visible');
});

When('ele preencher os dados do cartão', () => {
  cy.get('[data-qa="name-on-card"]').type('Lucas buff');
  cy.get('[data-qa="card-number"]').type('378282246310005');
  cy.get('[data-qa="cvc"]').type('321');
  cy.get('[data-qa="expiry-month"]').type('12');
  cy.get('[data-qa="expiry-year"]').type('2031');
});

When('confirmar o pagamento', () => {
  cy.get('[data-qa="pay-button"]').click();
});

Then('ele deve ver a mensagem de pedido realizado com sucesso', () => {
  cy.contains('Order Placed!', { timeout: 5000 }).should('be.visible');
  cy.contains('Congratulations! Your order has been confirmed!', { timeout: 5000 }).should('be.visible');
});

When('ele clicar no botão continuar', () => {
  cy.get('[data-qa="continue-button"]').click();
});

Then('ele deve ver a página inicial', () => {
  cy.contains(' Home').should('be.visible');
});
