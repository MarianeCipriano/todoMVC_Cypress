import telaInicial from '../../support/pageobjectstela-initial.pageobjects'

describe ('Adicionar itens na lista de todo', ()=>{
    beforeEach(() =>{

        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenpura"]
        todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })

    })
    
    it ('Concluir um item na lista ToDo', () =>{
        telaInicial.concluirItem()
        
    })
    
})