import { useState } from "react";
import "./collapsible.css";

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapsible">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        <span
          className={isOpen ? "filter__custom-arrow" : "filter__custom-arrow"}
        ></span>
        {props.label}
      </button>
      {isOpen && <div className="content">{props.children}</div>}
    </div>
  );
};

export default Collapsible;
