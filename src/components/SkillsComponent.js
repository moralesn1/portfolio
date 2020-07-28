import React from "react";
import { Card } from "react-bootstrap";

export default function SkillsComponent(props) {
  return (
    <Card className="skills-cards" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.header}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
