///<reference types ="cypress"/>
var login = 'adailton.vini.silva@gmail.com'
var senha = 'Eumesmo@11060'
var loginerro = 'adailton.vini.silva@gmail.com.br'
var senhaerro = 'Eumesmo@1106011'

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type(login)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, adailton.vini.silva')
        cy.get('a > .hidden-xs').should('contain', 'Welcome')
    });

    it('Deve apresentar mensagem de erro e-mail desconhecido', () => {

        cy.get('#username').type(loginerro)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    });

    it('Deve apresentar mensagem A senha fornecida para o e-mail está incorreta', () => {

        cy.get('#username').type(login)
        cy.get('#password').type(senhaerro)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail adailton.vini.silva@gmail.com está incorreta. Perdeu a senha?')

    });

});