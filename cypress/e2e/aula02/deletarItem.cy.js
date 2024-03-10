import telaInicial from '../../support/pageobjectstela-initial.pageobjects'

describe ('Validar filtros após a adição de itens', ()=>{
    beforeEach(() =>{

        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]
        todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)      
    })
    })
    it ('Deletar um item da lista', ()=>{
        telaInicial.deletarItem()
    })
    
    
})