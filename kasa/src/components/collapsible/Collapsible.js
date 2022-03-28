import { useState } from "react";
import "./collapsible.css";

const Collapsible = (props) => {
  const { children, label } = props;
  const [isOpen, setIsOpen] = useState(false);

  // changer la direction de la flèche
  const transform = {
    transform: isOpen && "rotate(180deg)",
  };

  return (
    <div className="collapsible">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="filter__custom-arrow" style={transform}></span>
        {label}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default Collapsible;
