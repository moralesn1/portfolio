import React from "react";
import socialMediaData from "../data/socialMedia";

export default function FooterComponent() {
  const socialData = socialMediaData.map((item, index) => {
    return (
      <li className="social-media-list" key={index}>
        <a href={item.link} target="_blank">
          <img
            className="social-media-icon"
            src={item.image}
            alt={item.title + "logo"}
          />
        </a>
      </li>
    );
  });
  const date = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <h5 className="footer-credits">Nathaniel Morales © {date} </h5>
      </div>
      <div className="social-media-wrapper">
        <div className="social-media-links">
          <div className="social-media-link">{socialData}</div>
        </div>
      </div>
    </div>
  );
}
