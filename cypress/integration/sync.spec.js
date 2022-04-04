/// <reference types ="cypress" />


describe('Working with sync', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach( () => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () =>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () =>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
    })
})