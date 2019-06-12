import React from "react";
import "./style.css";

export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <p className="lead text-center">
          Click on any image to accumulate points, but don't click on any image more than once or you will lose!
        </p>
      </div>
    </div>
  );
}