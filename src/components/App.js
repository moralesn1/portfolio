import React from "react";
import { Container, Row } from "react-bootstrap";

import LandingPageComponent from "./LandingPageComponent";
import ProjectCard from "./ProjectCard";

import "../App.css";

//data
import projectData from "./../data/projects";

function App() {
  function projectsCard(item, index) {
    return (
      <ProjectCard
        key={index}
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  }
  return (
    <>
      <Container>
        <LandingPageComponent />
        <Row className="project-row">
          {projectData.map(projectsCard).reverse()}
        </Row>
      </Container>
    </>
  );
}

export default App;
