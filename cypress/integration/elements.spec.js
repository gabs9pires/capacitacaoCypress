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
})

