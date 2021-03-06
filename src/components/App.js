import React from "react";
import { Container, Row } from "react-bootstrap";

//Components
import FooterComponent from "./FooterComponent";
import LandingPageComponent from "./LandingPageComponent";
import ProjectCard from "./ProjectCard";
import SectionTitleComponents from "./SectionTitleComponent";
import SkillsComponent from "./SkillsComponent";
import LinksComponent from "./LinksComponent";

import "../App.css";

//data
import frameworkSkills from "../data/frameworks";
import generalSkills from "../data/general";
import languageSkills from "../data/languages";
import projectData from "./../data/projects";

function App() {
	function projectsCard(item, index) {
		return (
			<ProjectCard
				key={index}
				image={item.image}
				title={item.title}
				description={item.description}
				repo={item.repo}
				tstack={item.techStack}
				link={item.link}
			/>
		);
	}

	function skillsCard(item, index) {
		return (
			<li className="skills-list-item" key={index}>
				<img
					src={item.image}
					className="skills-image"
					alt={item.title + "Logo"}
				></img>
				{item.title}
			</li>
		);
	}

	return (
		<>
			<Container>
				<LinksComponent />
				<LandingPageComponent />
				<SectionTitleComponents
					id="projects"
					header="Projects"
					classHeading="projects"
				/>
				<Row className="project-row">
					{projectData.map(projectsCard).reverse()}
				</Row>
				<SectionTitleComponents
					id="skills"
					header="Skills"
					classHeading="skills"
				/>
				<Row className="project-row">
					<SkillsComponent
						header="Language Skills"
						content={languageSkills.map(skillsCard)}
					/>
					<SkillsComponent
						header="Frameworks and Libraries"
						content={frameworkSkills.map(skillsCard)}
					/>
					<SkillsComponent
						header="General Skills"
						content={generalSkills.map(skillsCard)}
					/>
				</Row>
				<SectionTitleComponents classHeading="social" />
				<FooterComponent id="social" />
			</Container>
		</>
	);
}

export default App;
