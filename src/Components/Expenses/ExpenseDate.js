function ExpenseDate(props){
  const monthName = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.getDate();
    const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
                <div className='expense-date__month'>
                    {monthName}
                </div>
                <div className='expense-date__year'>
                    {year}
                </div>
                <div className='expense-date__day'>
                    {day}
                </div>
            </div>
  )
}

export default ExpenseDate;