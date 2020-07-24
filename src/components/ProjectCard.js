import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ProjectCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Repo</Button>
        </Card.Body>
      </Card>
    </>
  );
}
