import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import "./Expense.css";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesChart from "./ExpensesChart.jsx";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const items = props.item.filter(
    (element) => {
      const date = new Date(element.date);
   return  filteredYear === date.getFullYear().toString();
  }
  );
  // const items = props.item;
  let expenseContent =  <p> No Expense Found.</p>;
  if(items.length > 0){
    expenseContent = (
      items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))
    )
  }
  return (
    <Card className="expense">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={items}/>
     {expenseContent}
    </Card>
  );
}

export default Expense;
