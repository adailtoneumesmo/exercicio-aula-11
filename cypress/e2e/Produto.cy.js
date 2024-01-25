///<reference types="cypress" />



describe('Funcionalidade Pagina de produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').eq(4).click()
        cy.get(':nth-child(2) > .label > label').should('contain' , 'Color')
    });

    it('Deve incluir um produto no carrinho', () => {
        var quantidade = 10
        cy.get('.product-block').eq(4).click()
        cy.get('.button-variable-item-34').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear()
        .type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        
    });
});