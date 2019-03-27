//responsavel pela comunicação com a aplicação
//pegar informação do formulario e montar os objetos

//const NegociacaoControler = require('.domain/NegociacaoControler') //importar arquivo

var config = {
    apiKey: "AIzaSyDuYx4Dpdu9Oc9tr71I-PpCzMdyknyDxNc",
    authDomain: "info-6-2018-priscila.firebaseapp.com",
    databaseURL: "https://info-6-2018-priscila.firebaseio.com",
    projectId: "info-6-2018-priscila",
    storageBucket: "info-6-2018-priscila.appspot.com",
    messagingSenderId: "499832436811"
  };
  

const fire = firebase.initializeApp(config)
const firestore = firebase.firestore()

console.log(firestore)

console.log(fire)


const controler = new NegociacaoControler() //novo objeto
document.querySelector('.formulario').addEventListener('submit', ( evento ) => { //pegar conteudo do formulario(html(form)) e colocar um evento
    evento.preventDefault() //interrompe o fluxo normal(n permite refresh na pagina)
    controler.adiciona( evento, firestore) //mostra o textinho
}) 