/// <reference types ="cypress" />

describe('Work with basic elements', () => {
    beforeEach( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    })

    it('Link', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('Text field', () => {
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')
        //

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('hello')
        //

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            //da pra ver todos os comandos, é só escrever o {backspace} errado e executar
            .should('have.value', 'Teste123')
        //

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })

    it('RadioButton', () =>{
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        //
        
        cy.get('#formSexoMasc').should('not.be.checked')
    })

    it('Checkbox', () =>{
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        //

        cy.get('[name=formComidaFavorita]')
            .click({multiple:true})
        //
        
        cy.get('#formComidaPizza').should('not.be.checked')
    })

    it('Combo', () =>{
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
        //

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
            //é possível selecionar tanto pelo value quanto pelo texto
            //mas pra validar valor é só pelo value
        //

    })

    it.only('Combo multiplo', () =>{
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida'])
    })
})

