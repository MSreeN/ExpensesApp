'use strict';
import { useState } from "react";

import "./ExpenseFilter.css"


function ExpenseFilter(props){
  const [selectedYear, setSelectedYear] = useState('');
  function getFilteredData(e){
    // console.log("target value", e.target.value)
    setSelectedYear(e.target.value)
    
  }

  props.onFilterSelect(selectedYear);

  

  return(
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={getFilteredData}>
        <option value=''>&nbsp;ALL </option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter;