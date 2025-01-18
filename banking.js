function Account(accountNumber, balance) {
  this._accountNumber = accountNumber
  this._balance = balance
}

Account.prototype.deposit = function(amount) {
  this._balance += amount
  return this._balance
}

Account.prototype.withdraw = function(amount) {
  if (this._balance < amount) {
    console.log("Your balance is insufficient.")
  } else {
    this._balance -= amount
  }
  return this._balance
}

//確保 繼承自 Account
SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = SavingsAccount

function SavingsAccount(accountNumber, balance, interestRate) {
  Account.call(this, accountNumber, balance)
  this._interestRate = interestRate
}

SavingsAccount.prototype.addInterest = function() {
  //利息 = 餘額 * 利率
  if (typeof this._interestRate !== "number" || this._interestRate <= 0) {
    console.log("Invalid interest rate.")
    return this._balance
  }
  const interest = this._balance * this._interestRate
  this._balance += interest
  return this._balance
}

CheckingAccount.prototype = Object.create(Account.prototype)
CheckingAccount.prototype.constructor = CheckingAccount


function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance)
}

CheckingAccount.prototype.withdrawUsingCheck = function(amount) {
  const overdraftLimit = 100 // Can overspend 100
  if(this._balance - amount < -overdraftLimit) {
    console.log("Overdraft limit exceeded.")
  } else {
    this._balance -= amount
    console.log(`${this._balance}`)
  }
  return this._balance
}


//Test
const savings = new SavingsAccount("12345", 1000, 0.05);
savings.deposit(500);
console.log(savings.addInterest()); // 加利息後的餘額 //1575

const checking = new CheckingAccount("67890", 200);
checking.withdraw(250);
checking.withdrawUsingCheck(250);  // 測試透支情況