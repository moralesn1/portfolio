import React from "react";

export default function SectionTitleComponent(props) {
  return (
    <div className="section-title-wrapper">
      <h3 className="section-title-heading">{props.header}</h3>
    </div>
  );
}
