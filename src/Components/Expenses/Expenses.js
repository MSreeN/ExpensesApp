import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import "../NewExpense/ExpenseFilter";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";




function Expenses(props) {
  const [newYear, setNewYear] = useState("2022");
  
  function getFilterData(filterData) {
    setNewYear(filterData);
    
  }
  // console.log(newYear);
  let filteredAsPerYear;
  // console.log("this is from Expenses.js ", newYear);
  if(newYear){
    filteredAsPerYear = props.data.filter(v => v.date.getFullYear().toString() === newYear)
  }
  else{
    filteredAsPerYear = props.data;
  }
  

  return (
    <Card className="expenses">
      <ExpenseFilter
        onStart={newYear}
        onFilterSelect={getFilterData}
      ></ExpenseFilter>
      <ExpensesChart expenses = {filteredAsPerYear}/>
      <ExpensesList filteredAsPerYear = {filteredAsPerYear}/>
      
    </Card>
  );
}

export default Expenses;
