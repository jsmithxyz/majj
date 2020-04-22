import React from "react";
import Iframe from "react-iframe";
import "./Iframe.css";

function IFrame() {
  return (
    <Iframe
      url="http://www.youtube.com/embed/xDMP3i36naA"
      width="100%"
      height="100%"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
    />
  );
}

export default IFrame;
