///<reference types ="cypress"/>
var login = 'adailton.vini.silva@gmail.com'
var senha = 'Eumesmo@11060'
context('Funcionalidade login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(login)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, adailton.vini.silva')
        cy.get('a > .hidden-xs').should('contain' , 'Welcome')
           
    });
    
});