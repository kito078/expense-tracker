import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "gh",
      title: "transport",
      amount: "4000",
      date: new Date("2020-3-22"),
    },
  ];

  const [expense, setExpense] = useState(expenses);
  const onHandleData = (inComingData) => {
    console.log(inComingData);
    setExpense((prevExpense) => {
      return [inComingData, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <ExpenseItem inComingData={onHandleData} />
      <h3 className="app-text">Transaction</h3>

      <Expenses items={expense} />
    </div>
  );
}

export default App;
