import telaInicial from '../../support/pageobjectstela-initial.pageobjects'

decribe('RegressivoToDOApp', ()=>{
    context.skip('Validar a tela inicial', ()=>{
        beforeEach(()=>{
            cy.visit('/')
        });
        it('Validar a area label de input de dados', ()=>{
            telaInicial.validarInput("What needs to be done?")
        })

    })
    context('Validar a adicao de itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')
        })
        it ('Adicionar mais de um item na lista', () =>{
            var todoItens = ["Maça", "Banana", "Cenpura"]
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
        })
        /*
        * validar que o contador é igual a 3
        */
       telaInicial.validarCont(3)


    })
    context('Validar a conclusão de itens', ()=>{

        beforeEach(() =>{

            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenpura"]
            todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    
        })
        
        it ('Concluir um item na lista ToDo', () =>{
            telaInicial.concluirItem()
            telaInicial.validarCont(2)
            telaInicial.validarSizeToDO(2)
        })
    })
    context('Validar o filtro da aplicação', ()=>{
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
            telaInicial.validarSizeToDO(2)
        })
        it ('Validar a lista de inativos', ()=>{
            telaInicial.filtrarItens("Completed")
            telaInicial.validarSizeToDO(1)
        })

    })
    context('Validar a remoção de itens', ()=>{

        beforeEach(() =>{

            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)      
        })
        })
        it ('Deletar um item da lista', ()=>{
            telaInicial.deletarItem()
            telaInicial.validarSizeToDO(2)
        })
    })
})