import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');
  const [isEditing, setIsEditing] = useState(false)
  function submitHandler(e){
    e.preventDefault();
    const newExpenseData = {
      title: newTitle,
      amount: +newAmount,
      date : new Date(newDate)
    }
    props.onSaveNewExpense(newExpenseData);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
    setIsEditing(false)
  }

  

  function titleChangeHandler(e){
    // let title = document.querySelector('.new-expense__controls').textContent;
    setNewTitle(e.target.value);
    // console.log(e.target.value);
  }
 
  function amountChangeHandler(e){
    setNewAmount(e.target.value);
    // console.log(e.target.value);
  }

  function dateChangeHandler(e){
    setNewDate(e.target.value);
    // console.log(e.target.value);
  }

  function startEditingHandler(){
    setIsEditing(true);
  }

  function stopEditingHandler(){
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
    setIsEditing(false);

  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler} type="">Add New Expense</button>}
      {isEditing && <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={newAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={newDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={stopEditingHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>}
    </div>
  );
};

export default NewExpense;
