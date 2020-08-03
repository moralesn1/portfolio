import React from "react";
import { Card } from "react-bootstrap";

export default function ProjectCard(props) {
  return (
    <>
      <Card className="project-cards" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.tstack}</Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
          <a
            className="projectcard-anchor-link"
            href={props.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          {props.link ? (
            <a
              className="projectcard-anchor-link"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vist the App
            </a>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
}
