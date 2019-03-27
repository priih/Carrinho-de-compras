class Negociacao {
    constructor( descricao, quantidade, valorUnitario, data ) {
      this.descricao = descricao
      this.quantidade = quantidade
      this.valorUnitario = valorUnitario
      this.data = data
    }
  
    valorUnitarioTotal(comissao) {
      return (this.quantidade * this.valorUnitario) * comissao
    }
  
    mostrarDados() {
      let div = document.createElement('div')
      div.className = "card-item-nf"
      let p = document.createElement('p') //Atribuir um texto para o p
      let text = document.createTextNode(this.descricao)
      p.appendChild(text) 
      div.appendChild(p)
  
      text = document.createTextNode(this.quantidade)
      p = document.createElement('p')
      p.appendChild(text)
      div.appendChild(p)
      
      text = document.createTextNode('R$ ' + this.valorUnitario)
      p = document.createElement('p')
      p.appendChild(text)
      div.appendChild(p)//Colocar o p dentro da div
  
      text = document.createTextNode('R$ ' + this.quantidade * this.valorUnitario)
      p = document.createElement('p')
      p.appendChild(text)
      div.appendChild(p)
  
      document.querySelector('.relatorio').appendChild(div)//coloca a div dentro da section
    }

    bancoDeDados(){
        const bd = openDataBase("Teste", "1.0", "Teste Web SQL Database", 200000 ) //nome, quantidade, descrição, tamanho

        bd.transaction((transaction)=>{
            //criar a tabela
        transaction.executeSql(`CREATE TABLE negociacao (id INT UNIQUE AUTOINCREMENT, descricao TEXT, quantidade REAL, valor_unitario REAL)` )
        transaction.executeSql(`INSERT INTO negociacao (descricao, quantidade, valor) VALUES(?,?,?)`, [this.descricao, this.quantidade, this.valor_unitario])
    })

    adicionaNoFirestore( firestore ){
      firestore.collection("negociacao").add
    }    

    }
  }

//Instanciando a classe para definir um objeto
//const n = new Negociacao('Lápis', 3, 4.5, new Date())
//console.log(n.descricao)
//console.log(n.quantidade)
//console.log(n.valorUnitario)
//console.log(n.data)
//console.log(n.valorUnitarioTotal(1.02))
 