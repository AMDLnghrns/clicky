import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <i className="fab fa-react" />
      <a
        href="https://github.com/AMDLnghrns?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />Repo
      </a>
    </div>
  );
}