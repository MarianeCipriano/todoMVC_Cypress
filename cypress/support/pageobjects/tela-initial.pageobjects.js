const elem = require('../elements/tela-initial.elements').ELEMENTS
const concluirItem = require('../elements/tela-initial.elements').ITENS
const filtroItens = require('../elements/tela-initial.elements').FILTROS


class telaInicial{
    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placehouder')
        .and('include', texto)

    }

    validarCont(numero){
        cy.get(filtroItens.contador)
        .find('strong')
        .contains(numero)
        //.should('have.text', 3)

    }
    validarSize(){
        cy.get(concluirItem.validarListaItens)
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .first()
        .click()
    }
    filtrarItens(menu){

        cy.get(filtroItens.filtroToDo)
        cy.contains(menu).and('be.visible').click()

    }
    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first('button')
        .invoke('show')

    }
}

export default new telaInicial();