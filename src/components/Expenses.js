import React, { useState } from "react";
import { Button, Row, Col } from "reactstrap";
import ExpenseDate from "./ExpenseDate";

import "./Expenses.css";
import ExpenseFiltered from "./ExpenseFiltered";
import FilterForm from "./FilterForm";

function Expenses(props) {
  const [filterdYear, setFilteredYear] = useState("2020");
  const [totalAmount, setTotalAmount] = useState(0);

  // props.items.map((item) => {
  //  console.log(totalAmount);
  //  setTotalAmount((prevAmount) => {
  //   const result = prevAmount + parseInt(item.amount);
  //   console.log(result);
  // });
  //});

  const onHandleFilter = (filteredValue) => {
    setFilteredYear(filteredValue);
  };

  const filteredResults = props.items.filter((item) => {
    const year = item.date.getFullYear();
    //console.log(year, "year");
    return year === parseInt(filterdYear);
  });

  if (props.items.length === 0) {
    console.log(props.items.length);
    return <h3>no items for now </h3>;
  }
  return (
    <div>
      <FilterForm selected={filterdYear} onSaveFiltered={onHandleFilter} />
      <ExpenseFiltered expItems={filteredResults} />
    </div>
  );
}

export default Expenses;
