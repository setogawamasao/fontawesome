import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faCat, faHorse } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <>
      <FontAwesomeIcon icon={faHippo} />
      <FontAwesomeIcon icon={faCat} />
      <FontAwesomeIcon icon={faHorse} />
      {/* size : "xs","lg","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x" */}
      <FontAwesomeIcon icon={faHorse} size={"4x"} />
      {/* flip : "horizontal" , "vertical" , "both" */}
      <FontAwesomeIcon icon={faHorse} flip={"horizontal"} />
      {/* pull : "left" , "right" */}
      <FontAwesomeIcon icon={faHorse} pull={"right"} />
    </>
  );
};

export default App;
