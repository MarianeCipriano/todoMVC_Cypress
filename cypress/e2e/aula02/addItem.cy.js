import telaInicial from '../../support/pageobjectstela-initial.pageobjects'

describe ('Adicionar itens na lista de todo', ()=>{
    beforeEach(() =>{
            cy.visit('/')
    })
    it.skip( 'Add Item', ()=>{
        telaInicial.inputText("dado1")
        telaInicial.inputText("dado2")
        telaInicial.inputText("dado23")
    })
    it ('Adicionar mais de um item na lista', () =>{
        var todoItens = ["Maça", "Banana", "Cenpura"]
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })
})