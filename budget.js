let budget = 0;
let totalExpenses = 0;
let expenses = [];

function addBudget() {
  let budgetInput = document.getElementById("budgetInput");
  budget = Number(budgetInput.value);

  if (budget <= 0) {
    alert("Enter a valid budget");
    return;
  }

  budgetInput.value = "";
  calculateBudget();
}

function addExpense() {
  let title = document.getElementById("expenseTitle").value;
  let amount = Number(document.getElementById("expenseAmount").value);

  if (title === "") {
    alert("Enter expense name");
    return;
  }

  if (amount <= 0) {
    alert("Enter a valid amount");
    return;
  }

  if (amount > budget - totalExpenses) {
    alert("Not enough budget");
    return;
  }

  expenses.push({
    title: title,
    amount: amount,
  });

  totalExpenses += amount;

  document.getElementById("expenseTitle").value = "";
  document.getElementById("expenseAmount").value = "";

  displayExpenses();
  calculateBudget();
}

function displayExpenses() {
  let table = document.getElementById("Expence list");

  table.innerHTML = "";

  expenses.forEach(function (expense, index) {
    let row = document.createElement("tr");

    let titleCell = document.createElement("td");
    titleCell.innerText = expense.title;

    let amountCell = document.createElement("td");
    amountCell.innerText = expense.amount.toFixed(2);

    let actionCell = document.createElement("td");

    let button = document.createElement("button");
    button.innerText = "Remove";

    button.onclick = function () {
      removeExpense(index);
    };

    actionCell.appendChild(button);

    row.appendChild(titleCell);
    row.appendChild(amountCell);
    row.appendChild(actionCell);

    table.appendChild(row);
  });
}

function removeExpense(index) {
  totalExpenses -= expenses[index].amount;

  expenses = expenses.filter(function (expense, i) {
    return i !== index;
  });

  displayExpenses();
  calculateBudget();
}

function calculateBudget() {
  let remaining = budget - totalExpenses;

  document.getElementById("totalBudget").innerText = budget.toFixed(2);
  document.getElementById("totalExpenses").innerText = totalExpenses.toFixed(2);
  document.getElementById("budgetLeft").innerText = remaining.toFixed(2);
}

function resetAll() {
  budget = 0;
  totalExpenses = 0;
  expenses = [];

  document.getElementById("budgetInput").value = "";
  document.getElementById("expenseTitle").value = "";
  document.getElementById("expenseAmount").value = "";

  displayExpenses();
  calculateBudget();
}
