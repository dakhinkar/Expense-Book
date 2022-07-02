import React, { useState,useEffect } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    date: new Date(Date.UTC(2020, 8 - 1, 13)),
    amount: "94.12",
  },
  {
    id: 2,
    title: "New TV",
    date: new Date(Date.UTC(2021, 3 - 1, 11)),
    amount: "799.49",
  },
  {
    id: 3,
    title: "Car Insurance",
    date: new Date(Date.UTC(2021, 3 - 1, 27)),
    amount: "294.67",
  },
  {
    id: 4,
    title: "New Disk(Wooden)",
    date: new Date(Date.UTC(2021, 6 - 1, 11)),
    amount: "450",
  },
];


function App() {
  // const [expenses, setExpenses] = useState([]);
  

  

  // useEffect(() => {
  //   const expensesItem = JSON.parse(localStorage.getItem('items'));
  //   if (expensesItem) {
  //     setExpenses(expensesItem);
  //   }
  //   localStorage.setItem('items', JSON.stringify(expenses));
    
  //   // }
  // }, [expenses]);

  

   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default App;
