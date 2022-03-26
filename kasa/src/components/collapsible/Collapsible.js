import { useState } from "react";
import "./collapsible.css";

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // changer la direction de la flèche
  const transform = {
    transform: isOpen && "rotate(180deg)",
  };

  return (
    <div className="collapsible">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="filter__custom-arrow" style={transform}></span>
        {props.label}
      </button>
      {isOpen && <div className="content">{props.children}</div>}
    </div>
  );
};

export default Collapsible;

// https://www.youtube.com/watch?v=4F8EYGao9pc
