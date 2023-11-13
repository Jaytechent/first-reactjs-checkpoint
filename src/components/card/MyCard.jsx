// import boostrap,react-boostrap and card component from react-boostrap

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
import { mycarddata } from "../../data";

// This is a single react-boostrap component that's been rendered thrice on the app.js file

function MyCard() {
  return (
    <div className="card--div">
      {mycarddata.map((item) => (
        <div key={item.id}>
          <Card
            style={{ height: "30rem", width: "20rem" }}
            className="Card--div"
          >
            <Card.Img className="Img" variant="top" src={item.Img} />
            <Card.Body className="CardBody">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button className="btn" variant="primary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default MyCard;
