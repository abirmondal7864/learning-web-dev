document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    //used to retrieve saved data (like a list of expenses) from the browser's localStorage, or fall back to an empty array if nothing is saved yet.
    
    let totalAmount = calculateTotal();
    

  expenseForm.addEventListener("submit", e => {
      e.preventDefault(); // Prevents the form from submitting and reloading the page
      

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name != "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name, //name: name, is unnecessray
        amount
      };
      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();

      //clear form fields
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });
  
  expenseList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
          const idToDelete = parseInt(e.target.getAttribute("data-id")); //Imp***
          // Retrieves the data-id attribute from the button and converts it to an integer.
          // This ID uniquely identifies which expense to delete.
          expenses = expenses.filter((expense) => expense.id !== idToDelete);

          saveExpensesToLocal();
          renderExpenses();
          updateTotal();
    }
  })
    
  function renderExpenses() {
    expenseList.innerHTML = ""; // 1. Clear existing list
    expenses.forEach(expense => {
      const li = document.createElement("li"); // 2. Create a new list item
      li.innerHTML = `
              ${expense.name} - $${expense.amount} 
              <button data-id="${expense.id}">Delete</button>
            `;
      expenseList.appendChild(li); // 3. Add it to the list
    });
  }

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0); //0 is the initial value of the sum (starts from 0)
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses)); //Imp***
    // | Part                       | Meaning                                                                                             |
    // | -------------------------- | --------------------------------------------------------------------------------------------------- |
    // | `localStorage`             | A built-in browser object for storing key-value pairs **persistently**                              |
    // | `.setItem(key, value)`     | Saves a value to local storage under a specific key                                                 |
    // | `"expenses"`               | The key — a name you choose to identify the data                                                    |
    // | `JSON.stringify(expenses)` | Converts the `expenses` array/object to a **JSON string**, because localStorage only stores strings |
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }
    


});
