import React from "react";
import ExpenseList from "./ExpenseList";

function ExpenseFiltered(props) {
  if (props.expItems.length === 0) {
    return <h5 className="text-danger m-4">no items for now</h5>;
  }
  return (
    <div>
      {props.expItems.map((item) => {
        return (
          <div className="list__items align-items-center justify-content-center mt-4 flex-column">
            <ExpenseList
              id={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date.toDateString()}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ExpenseFiltered;
