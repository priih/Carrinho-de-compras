//responsavel pela comunicação com a aplicação
//pegar informação do formulario e montar os objetos

//const NegociacaoControler = require('.domain/NegociacaoControler') //importar arquivo
const controler = new NegociacaoControler() //novo objeto
document.querySelector('.formulario').addEventListener('submit', ( evento ) => { //pegar conteudo do formulario(html(form)) e colocar um evento
    evento.preventDefault() //interrompe o fluxo normal(n permite refresh na pagina)
    controler.adiciona( evento ) //mostra o textinho
}) 