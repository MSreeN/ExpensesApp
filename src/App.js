import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses'
import './Components/NewExpense/NewExpense'
import NewExpense from './Components/NewExpense/NewExpense';

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  function newExpenseHandler(newExpenseData){
    if(newExpenseData.title){

      const expenseData = {
        id : String(Math.random()),
        ...newExpenseData
      }
      setExpenses(prevExpenses => {
        return [expenseData, ...prevExpenses]
      });
    }
  }
  // console.log(expenses);
  return (
    <div className="App">
      {/* <AddExpense/> */}
      <NewExpense onSaveNewExpense = {newExpenseHandler}></NewExpense>
      <Expenses data = {expenses}/>
    </div>
  );
}

export default App;
