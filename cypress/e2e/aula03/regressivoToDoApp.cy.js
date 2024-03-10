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

    })
    context('Validar o filtro da aplicação', ()=>{

    })
    context('Validar a remoção de itens', ()=>{

    })
})