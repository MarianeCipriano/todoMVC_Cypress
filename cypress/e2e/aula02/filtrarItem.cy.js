import telaInicial from '../../support/pageobjectstela-initial.pageobjects'

describe ('Validar filtros após a adição de itens', ()=>{
    beforeEach(() =>{

        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]
        todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)      
    })

    telaInicial.concluirItem()
        
    })
    it ('Validar a lista de ativos', ()=>{
        telaInicial.filtrarItens("Active")
    })
    it ('Validar a lista de inativos', ()=>{
        telaInicial.filtrarItens("Completed")
    })
    
    
})