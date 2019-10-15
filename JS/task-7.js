// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const obj = {
      id: this.transactions.length + 100,
      type: Transaction.DEPOSIT,
      amount: amount,
    }
   this.balance += amount;
   this.addTransaction (obj);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const obj = {
      id: this.transactions.length + 100,
      type: Transaction.WITHDRAW,
      amount: amount,
    }
    if (amount > this.balance) {
      console.log ("Cнятие такой суммы не возможно, недостаточно средств.")
    } else {
      this.balance = this.balance -= amount;
      this.addTransaction (obj);
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let key of this.transactions) {
      if (key.id === id){
        return key;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for(let key of this.transactions) {
      if(key.type === type) {
        total += key.amount;
      }
    }
    return total;
  },
};

account.deposit(500)
account.getBalance()
account.deposit(100)
console.log(account.balance)
console.table(account.transactions)

account.withdraw(200)
console.log(account.balance)
console.table(account.transactions)

account.withdraw(500)
console.log(account.balance)
console.table(account.transactions)

console.log(account.getBalance())
console.log(account.getTransactionDetails(101));
console.log (account.getTransactionTotal('deposit'))