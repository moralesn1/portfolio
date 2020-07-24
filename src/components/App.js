import React from "react";
import ProjectCard from "./ProjectCard";

import { Container, Row, Button } from "react-bootstrap";

import "../App.css";

//data
import projectData from "./../data/projects";

function App() {
  function projectsCard(item, index) {
    return (
      <ProjectCard
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  }
  return (
    <>
      <Container>
        <div>
          <h1>yo</h1>
        </div>
        <Row className="project-row">{projectData.map(projectsCard)}</Row>
      </Container>
    </>
  );
}

export default App;
