import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {
  // console.log("new value");
  
  
  // const [title, setTitle]  = useState(props.title)

  function clickHandler()  {
    // setTitle('new title');
  }
  // setTitle(props.title)


  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button type="" onClick={clickHandler}>Click</button>
      </div>
    </Card></li>
  );
}

export default ExpenseItem;
