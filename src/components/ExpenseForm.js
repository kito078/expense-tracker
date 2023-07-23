import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const onTitleHandler = (event) => {
    setTitleValue(event.target.value);
  };
  const onAmountHandler = (event) => {
    setAmountValue(event.target.value);
  };
  const onDateHandler = (event) => {
    setDateValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseEntered = {
      title: titleValue,
      amount: amountValue,
      date: new Date(dateValue),
    };
    setTitleValue("");
    setAmountValue("");
    setDateValue("");

    props.onSaveExpense(expenseEntered);
  };

  return (
    <div className="mt-3">
      <form onSubmit={onSubmitHandler} action="">
        <div>
          <input
            value={titleValue}
            onChange={onTitleHandler}
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div>
          <input
            value={amountValue}
            onChange={onAmountHandler}
            type="number"
            placeholder="Enter Title"
          />
        </div>
        <div>
          <input
            value={dateValue}
            onChange={onDateHandler}
            type="date"
            min="2020-01-01"
            max="2023-12-31"
          />
        </div>
        <Button className="primary">ADD</Button>
      </form>
    </div>
  );
}

export default ExpenseForm;
