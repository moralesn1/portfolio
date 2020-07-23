import React from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";

//data
import projectData from "./../data/projects";

function App() {
  return (
    <>
      <div>
        <h1>yo</h1>
      </div>
      <ProjectCard />
      {projectData.map((item) => {
        return (
          <>
            <img src={item.image} alt={item.title} />
          </>
        );
      })}
    </>
  );
}

export default App;
