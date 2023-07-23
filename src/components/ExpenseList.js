import React from "react";
import { Button, Row, Col } from "reactstrap";
import ExpenseDate from "./ExpenseDate";

function ExpenseList(props) {
  return (
    <div>
      <Row className="expense__item">
        <Col>
          <h5>{props.title}</h5>
        </Col>
        <Col>
          <h5>${props.amount}</h5>
        </Col>
        <Col>
          <p>{props.date}</p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default ExpenseList;
