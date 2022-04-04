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

    it.only('Uso do find', () =>{
        cy.get('#buttonList').click();
        cy.get('#lista li')
        //fazer uma busca mais reduzida a partir desse get 
        .find('span')
        .should('contain', 'Item 1')

        //cy.get('#lista li')
        //.find('span')
        //.should('contain', 'Item 2')
        //aqui ele dá erro pois fica tentando achar o item 2 dentro do spam do item 1
        //ele não volta até o comando do get, volta um comando só (find)

        cy.get('#lista li span')
        .should('contain', 'Item 2')

    })
})
