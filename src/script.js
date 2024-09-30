let income = 0;
let expenses = [];

class Expense {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
}

const updateBalance = () => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBalance = income - totalExpenses;
  document.getElementById('remaining-balance').textContent = remainingBalance.toFixed(2);
};

const addExpense = () => {
  const expenseName = document.getElementById('expense-name').value.trim();
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

  if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
    const newExpense = new Expense(expenseName, expenseAmount);
    
    expenses = [...expenses, newExpense];

    document.getElementById('expense-items').innerHTML = expenses.map(expense =>
      `<li>${expense.name}: $${expense.amount.toFixed(2)}</li>`
    ).join('');

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';

    updateBalance();
  }
};

document.getElementById('set-income-btn').addEventListener('click', () => {
  const enteredIncome = parseFloat(document.getElementById('income').value);
  if (!isNaN(enteredIncome) && enteredIncome > 0) {
    income = enteredIncome;
    document.getElementById('income').value = ''; 
    updateBalance();
  }
});

document.getElementById('add-expense-btn').addEventListener('click', addExpense);
