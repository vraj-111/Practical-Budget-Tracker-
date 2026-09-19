Review : 

<img width="1916" height="863" alt="image" src="https://github.com/user-attachments/assets/9c1dafce-9657-4d94-9e01-067aefac98c0" />


💰 Budget Tracker System

A simple, clean, and fully functional Budget Tracker System built using HTML, CSS, and Vanilla JavaScript.

The project allows users to set a budget, add expenses, view expense history, and automatically calculate the total budget, total expenses, and remaining budget.

📸 Project Preview

The interface contains:

Budget input section

Expense title and amount inputs

Add Budget button

Add Expense button

Total Budget display

Total Expenses display

Budget Left display

Expense history table

Delete expense functionality

Reset All functionality

🚀 Features

1. Add Budget

Users can enter their available budget and add it to the application.

2. Add Expense

Users can enter:

Expense title

Expense amount

After adding an expense, the application automatically updates the expense history and calculations.

3. Automatic Calculations

The application calculates:

Total Budget = Added Budget

Total Expenses = Sum of all expenses

Budget Left = Total Budget - Total Expenses

4. Expense History

All added expenses are displayed in a table with:

Expense Name

Amount

Action

Food

₹500

Delete

Travel

₹300

Delete

5. Delete Expense

Each expense has a delete action. When an expense is deleted, the total expenses and remaining budget are recalculated automatically.

6. Reset All

The Reset All button clears:

Budget

All expenses

Total expenses

Remaining budget

Expense history

7. Input Validation

The application should prevent invalid data such as:

Empty budget

Empty expense title

Empty expense amount

Negative values

Invalid numbers

8. Responsive Design

The website should work properly on:

Desktop

Laptop

Tablet

Mobile

9. Local Storage

The project can use browser localStorage so that budget and expenses remain available even after refreshing the page.

🛠️ Technologies Used

HTML5 – Structure of the application

CSS3 – Styling and responsive layout

JavaScript (Vanilla JS) – Application logic and DOM manipulation

LocalStorage – Saving budget and expense data in the browser

📁 Project Structure

Budget-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ How It Works

Step 1: Set Budget

Enter a budget amount in the Budget field.

Example:

₹10,000

Click:

Add Budget

The total budget will be displayed automatically.

Step 2: Add Expense

Enter the expense name and amount.

Example:

Expense Title: Food
Amount: 500

Click:

Add Expense

The expense will appear in the Expense History section.

Step 3: Check Budget

The dashboard automatically displays:

Total Budget:     ₹10,000
Total Expenses:   ₹500
Budget Left:      ₹9,500

Step 4: Delete Expense

Click the delete button next to an expense.

The application will remove that expense and recalculate the totals.

Step 5: Reset

Click Reset All to clear the complete application data.

🧠 JavaScript Functionality

The JavaScript should manage the following main operations:

addBudget()
addExpense()
deleteExpense()
calculateTotals()
displayExpenses()
resetAll()
saveData()
loadData()

Example Calculation

const totalExpenses = expenses.reduce(
  (total, expense) => total + expense.amount,
  0
);

const budgetLeft = budget - totalExpenses;

✅ Functional Requirements

The final application should satisfy these requirements:

Add budget

Add expenses

Display expenses

Calculate total expenses

Calculate remaining budget

Delete individual expenses

Reset all data

Validate user inputs

Responsive UI

Store data using LocalStorage

Restore data after page refresh

🎨 UI Design

The design is based on a clean dashboard layout.

Main Layout

---------------------------------------------------------
|                 Budget Tracker System                  |
---------------------------------------------------------
|                    |                                  |
|  Add Budget        |  Total Budget | Total Expenses   |
|                    |  Budget Left                    |
|  Add Expense       |                                  |
|                    |  Expense History                 |
|  Reset All         |                                  |
---------------------------------------------------------

The interface uses:

Clean cards

Rounded corners

Simple form controls

Dashboard summary cards

Expense table

Clear action buttons

Responsive layout

🔐 Data Handling

The project can store data in the browser using:

localStorage.setItem("budget", budget);
localStorage.setItem("expenses", JSON.stringify(expenses));

Data can be loaded when the page starts:

const budget = Number(localStorage.getItem("budget")) || 0;

const expenses =
  JSON.parse(localStorage.getItem("expenses")) || [];

This means users do not lose their data when they refresh the page.

📱 Responsive Behavior

On larger screens:

Left Side       Right Side
Forms           Dashboard

On smaller screens:

Add Budget
Add Expense
Reset All

Dashboard
Expense History

CSS media queries should be used to make the layout mobile-friendly.

▶️ How to Run

No backend or installation is required.

1. Clone the repository

git clone YOUR_REPOSITORY_URL

2. Open the project

Open the project folder in VS Code.

3. Run the project

You can open index.html directly in your browser.

For development, you can also use the Live Server extension in VS Code.

🧪 Example

Suppose the user adds:

Budget = ₹20,000

Then adds:

Food      ₹500
Travel    ₹1,000
Shopping  ₹2,000

The dashboard will show:

Total Budget:    ₹20,000
Total Expenses:  ₹3,500
Budget Left:     ₹16,500

If the user deletes the Shopping expense:

Total Budget:    ₹20,000
Total Expenses:  ₹1,500
Budget Left:     ₹18,500

🔮 Future Improvements

The project can be extended with:

Expense categories

Income tracking

Monthly budget tracking

Date-wise expenses

Expense search

Expense filtering

Expense sorting

Monthly reports

Charts and graphs

Dark mode

Export data to CSV

Import expense data

Multiple budgets

Currency selection

Login and user accounts

Backend database

REST API

User authentication

📌 Project Goal

The main goal of this project is to create a beginner-friendly but fully functional personal budget and expense management application using frontend technologies.

It is also useful for practicing:

HTML forms

CSS layouts

JavaScript DOM manipulation

Arrays and objects

JavaScript functions

Event handling

Data validation

LocalStorage

Dynamic HTML rendering

Responsive web design

👨‍💻 Author

Vraj Desai

Full Stack Web Developer
