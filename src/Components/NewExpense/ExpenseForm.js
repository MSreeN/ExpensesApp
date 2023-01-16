import './ExpenseForm.css';

function ExpenseForm(){
  return(
  <form>
    <div className='new-expense__controls'>
      <div className='new-expense__controls'>
        <label>Title</label>
        <input type="text" name="" value=""/>
      </div>
      <div className='new-expense__controls'>
        <label>Amount</label>
        <input type="number" name="" value="" min = "0.01" step = "0.01"/>
      </div>
      <div className='new-expense__controls'>
        <label>Date</label>
        <input type="date" name="" value="" min = "2019-01-31" max = "2022-12-31"/>
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type="submit">Add Expense</button>
    </div>
  </form>
  )
}

export default ExpenseForm;