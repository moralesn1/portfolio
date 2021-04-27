import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function LinksComponent() {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<div className="links-component-wrapper">
				<b>
					<p onClick={scrollToTop}>Home</p>
				</b>
				<Link to="section-title-wrapper projects" spy={true} smooth={true}>
					<b>Projects</b>
				</Link>
				<li>
					<Link to="section-title-wrapper skills" spy={true} smooth={true}>
						<b>Skills</b>
					</Link>
				</li>
				<li>
					<Link to="section-title-wrapper social" spy={true} smooth={true}>
						<b>Socials</b>
					</Link>
				</li>
			</div>
		</>
	);
}
