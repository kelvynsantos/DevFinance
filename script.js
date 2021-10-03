const Modal = {
    open() {
        //Abrir modal ; adicionar a class active ao modal 
        //alert('Abrir o modal!') 
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        //fechar o modal ; remover a class active do modal 
        document.querySelector('.modal-overlay').classList.remove('active')
    }
} 
const Transactions = [ 
    {
        id:1,
        description:'Luz',
        amount:-50000,
        date:'23/01/2021',    
    },
    {
        id:2,
        description:'Website',
        amount:500000,
        date:'31/9/2021', 
    },
    {
        id:3,
        description:'Internet',
        amount:-20000,
        date:'11/08/2021',
    }, 
    { 
        id:4,
        description:'Aluguel', 
        amount: 200000,
        date:'11/09/2021',
    }, 
    { 
        id:5, 
        description:'Salário',
        amount:1500000,
        date:'01/10/2021',
    }
]
const Transaction = { 
    incomes() { //somar as entradas
         
    }, 
    expenses() { //somar as saídas
         
    },
    total(){ //entradas - saídas

    }
} 

const DOM = { 
     transactionsContainer: document.querySelector('#data-table tbody'),
     addTransaction(transaction,index){  
         //const transaction = Transactions[0]
         //console.log(transaction)
        const tr = document.createElement('tr')
         tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        //  console.log(tr.innerHTML) 
          
     DOM.transactionsContainer.appendChild(tr)
     },
     innerHTMLTransaction(transaction){ 
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount =  Utils.formatCurrency(transaction.amount)
        const html = `                     
          <td class="description">${transaction.description}</td>
          <td class="${CSSclass}">${transaction.amount}</td>
          <td class="date">${transaction.date}</td>
          <td>
              <img src="./assets/minus.svg" alt="Remover transação">
          </td> 
      ` 
      return html
     }
} 

const Utils = {
    formatCurrency(value){ 
        // console.log(value) 
        const signal = Number(value) < 0 ? "-" : ""
    }
}
//DOM.addTransaction(Transactions[0]) 
Transactions.forEach(function(transaction){
     DOM.addTransaction(transaction)
}) 
