import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [toggleForm, setToggleForm] = useState(false);

  const saveExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const adderClickHandler = () => {
    setToggleForm((prevstate) => !prevstate);
  };
  let adder = toggleForm ? (
    <ExpenseForm
      onSaveNewExpense={saveExpenseHandler}
      onCancel={adderClickHandler}
    />
  ) : (
    <button onClick={adderClickHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{adder}</div>;
};

export default NewExpense;
