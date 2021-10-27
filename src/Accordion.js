import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ question, answer, icon }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section>
      <div className="question-container">
        <h2>{question}</h2>
        {showMenu ? (
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="icon"
            icon={faMinusCircle}
          />
        ) : (
          <FontAwesomeIcon
            onClick={toggleMenu}
            className="icon"
            icon={faPlusCircle}
          />
        )}
      </div>
      {showMenu ? <p>{answer}</p> : ""}
    </section>
  );
};

export default Accordion;
