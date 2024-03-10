import telaInicial from '../../support/pageobjectstela-initial.pageobjects'

describe ('Adicionar itens na lista de todo', ()=>{
    beforeEach(() =>{
            cy.visit('/')
    })
    
    it( 'Add Item', ()=>{
        telaInicial.inputText("dado1")
        telaInicial.inputText("dado2")
        telaInicial.inputText("dado23")
    })

    
})