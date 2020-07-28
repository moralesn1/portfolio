import React from "react";
import profilePicture from "../assets/portfolio_images/profile-pic.png";

export default function LandingPageComponent() {
  return (
    <>
      <div className="landing-page-wrapper">
        <div className="landing-page-hero-image">
          <img className="hero-image" src={profilePicture} alt="Profile logo" />
        </div>
        <div className="landing-page-description-container">
          <p>Hi there! I'm Nathaniel.</p>
          <p>I'm a Full Stack Developer based in Sydney, Australia.</p>
          <p>
            Developing and designing web applications and seeing them come to
            life is my passion.
          </p>
          <p>
            If I'm not working you can usually find me at the gym, exploring
            Azeroth or Tamriel.
          </p>
        </div>
      </div>
    </>
  );
}
