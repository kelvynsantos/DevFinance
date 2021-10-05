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
        amount:-23500,
        date:'11/08/2021',
    }, 
    { 
        id:4,
        description:'Investimentos', 
        amount: 200019,
        date:'11/09/2021',
    }, 
    { 
        id:5, 
        description:'Salário',
        amount:1038200,
        date:'01/10/2021',
    },
    {
         id:6, 
         description:"Aluguel", 
         amount:-150300,
         date:'01/10/2021', 
    },
]
const Transaction = { 
    all: Transactions,  

    add(transaction){ 
        Transaction.all.push(transaction) 
        console.log(Transaction.all)
    }, 

    incomes() {
        let income = 0; 

        Transaction.all.forEach(transaction => { 
         if(transaction.amount > 0){
              income += transaction.amount;
         } 
        })
        return income
    },
      
    expenses() { //somar as saídas 
        let expense = 0;
        Transaction.all.forEach(transaction => { 
            if(transaction.amount < 0){
                expense += transaction.amount;
            }
        })
        return expense     
    },
     
    total(){ //entradas - saídas 
        return Transaction.incomes() + Transaction.expenses()
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
          <td class="${CSSclass}">${amount}</td>
          <td class="date">${transaction.date}</td>
          <td>
              <img src="./assets/minus.svg" alt="Remover transação">
          </td> 
      ` 
      return html
     },
       
     updateBalance() 
     {
        document.getElementById('incomeDisplay'). 
        innerHTML = Utils.formatCurrency(Transaction.incomes())

        document.getElementById('expenseDisplay'). 
        innerHTML = Utils.formatCurrency(Transaction.expenses())
         
        document.getElementById('totalDisplay'). 
        innerHTML = Utils.formatCurrency(Transaction.total())
     }

} 

const Utils = {
    formatCurrency(value){ 
        // console.log(value) 
        const signal = Number(value) < 0 ? "-" : "" 
        value = String(value).replace(/\D/g,"") // //-> regular expression; g-> global; \D->just numbers
        // console.log(signal) 
        value = Number(value) / 100 
        value = value.toLocaleString("pt-BR", {
             style: "currency", 
             currency: "BRL"
        })
        return signal + value
    }
} 
 
const App ={ 
    init(){
         Transaction.all.forEach(Transaction=> { 
             DOM.addTransaction(Transaction)}) 
          
         DOM.updateBalance()
    }, 
    reload(){ 
        App.init()
    }, 
    reload() { 
        App.init()
    },
} 
 
App.init() 
 
Transaction.add({ 
    id:39, 
    description:'ola',
    amount:2000,
     date:"12/12/2021"

})
//DOM.addTransaction(Transactions[0]) 
// Transactions.forEach(function(transaction){
//      DOM.addTransaction(transaction)
// })  
 
// DOM.updateBalance() 
 
// Transaction.add({
//      id:23,
//      description:'fjkhjkf', 
//      amount:3432, 
//      date:'21/02/2021'
// })
