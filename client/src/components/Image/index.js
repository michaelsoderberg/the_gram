import React from "react";
import "./styles.css";

const Image = ({ src, title }) => (
  <div>
    <img className="Image" alt={title} src={src} />
    <h6>{title}</h6>
  </div>
);

export default Image;

