/// <reference types ="cypress" />


describe('Working with sync', () => {

    before( () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
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

    it
    
    ('Uso do find', () =>{
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

    it('Using timeout', () => {
        cy.get('#buttonListDOM').click()
        //cy.wait(5000)
        //aqui ele vai parar pelos 5sec
        cy.get('#lista li span', {timeout: 30000})
        //esse timeout não vai esperar esses sec, ele pode rodar esse tempo podendo encerrar
        //antes caso a condição seja aceita
            .should('contain', 'Item 2')
    })

    it.only('Should vs then', () =>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').should($el => {
            //o should fica executando enquanto espera o get ser concluído
            //o .then ele aguarda o get ser finalizado para fazer sua execução 
            //ele também não precisa retornar o mesmo objeto que foi recebido diferente do should 
            console.log($el)
            expect($el).to.have.length(1)
        })
    })


})
