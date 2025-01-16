[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jPmkeab6)
# JavaScript Prototype Chaining Exercise

In this exercise, you will explore and practice prototype chaining in JavaScript. Prototype chaining is a crucial concept in JavaScript, allowing objects to inherit properties and methods from their prototypes, creating a chain of inheritance.

## Task

You are tasked with creating a prototype chain for a simple banking system. You'll define multiple constructor functions to represent different entities in the banking system and set up prototype chaining to inherit properties and methods between these entities.

### Constructor Functions

1. `Account` Constructor:
   - Properties:
     - `accountNumber` (string): The unique account number for each account.
     - `balance` (number): The current balance in the account.

   - Methods:
     - `deposit(amount)`: This method should increase the balance by the specified `amount`.
     - `withdraw(amount)`: This method should decrease the balance by the specified `amount`.

2. `SavingsAccount` Constructor (Subclass of `Account`):
   - Properties:
     - `interestRate` (number): The annual interest rate for the savings account.

   - Methods:
     - `addInterest()`: This method should add interest to the account's balance based on the `interestRate`.

3. `CheckingAccount` Constructor (Subclass of `Account`):
   - Methods:
     - `withdrawUsingCheck(amount)`: This method should allow withdrawing money using a check. The balance should be decreased by the specified `amount`.

### Instructions

1. Create JavaScript files (`banking.js`) and define the `Account`, `SavingsAccount`, and `CheckingAccount` constructors with their respective properties and methods.

2. Implement prototype chaining so that `SavingsAccount` and `CheckingAccount` inherit from the `Account` constructor.

3. Create instances of each class and demonstrate their functionality. For example, create a savings account, deposit money, add interest, and withdraw funds. Similarly, create a checking account, deposit money, and withdraw using a check.
