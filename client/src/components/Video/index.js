import React from "react";
import "./styles.css";

const Video = ({ src, title }) => (
  <div>
    <video className="Video" title={title} poster={src} autoPlay loop>
      <source src={src + ".webm"} type="video/webm" />
      <source src={src + ".mp4"} type="video/mp4" />
    </video>
    <h6>{title}</h6>
  </div>
);

export default Video;

