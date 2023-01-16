import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpensesList(props){
  
  if(props.filteredAsPerYear.length == 0){
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
    
  }
  return (
    <ul className="expenses-list">
      {props.filteredAsPerYear.map((expenses) => (
      <ExpenseItem
      key = {expenses.id}
        title={expenses.title}
        date={expenses.date}
        amount={expenses.amount}
      />
    ))}
    </ul>
  )
}

export default ExpensesList;