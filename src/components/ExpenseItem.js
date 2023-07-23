import React from "react";
import ExpenseForm from "./ExpenseForm";

function newExpense(props) {
  const onExpenseHandler = (enteredExpense) => {
    const maExpense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.inComingData(maExpense);
  };
  return (
    <div>
      <ExpenseForm onSaveExpense={onExpenseHandler} />
    </div>
  );
}

export default newExpense;

{
  /*
import React from "react";
import ExpenseForm from "./ExpenseForm";

function ExpenseItem(props) {
  const onExpenseEnteredData = (enteredData) => {
    const expenseObj = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onSaveIncomingData(expenseObj);
  };
  return (
    <div>
      <ExpenseForm onSaveExpenseData={onExpenseEnteredData} />
    </div>
  );
}

export default ExpenseItem;
*/
}
