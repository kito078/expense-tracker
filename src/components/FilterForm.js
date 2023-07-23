import React from "react";

function ExpenseFilter(props) {
  const onHandleFilter = (event) => {
    props.onSaveFiltered(event.target.value);
  };

  return (
    <div>
      <div>
        <select value={props.selected} onChange={onHandleFilter} name="" id="">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
