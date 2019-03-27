//controler trata dos dados antes de enviar para a classe
//classe(sempre com letra maiuscula)

class NegociacaoControler {
    constructor(){
        this.dados = []
    }


    adiciona(evento, firestore){ //metodo
        evento.preventDefault() //nao deixa atualizar
        let inputs = document.querySelectorAll('.campos') //pegar dados do formulario

        const descricao = inputs[0].value
        const quantdade = parseFloat(inputs[1].value)
        const valorUnitario = parseFloat(inputs[2].value)
        const data = inputs[3].value


        const negociacao =  new Negociacao(descricao, quantidade, valorUnitario, data)//Instanciação

        negociacao.adicionaNoFirestore(firestore)

        this.dados.push(negociacao)

        negociacao.bancodeDados()

        negociacao.mostrarDados() 
    } 
}

//module.exports = NegociacaoControler //exportar