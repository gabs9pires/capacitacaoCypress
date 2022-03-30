/// <reference types ="cypress" />

describe('Cypress basic', () =>{
    it('should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        //ou 
        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
        
    })

    it('Should find and interact whit an element', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
    })
})