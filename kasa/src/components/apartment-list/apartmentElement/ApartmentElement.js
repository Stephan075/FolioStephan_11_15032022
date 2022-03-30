import { NavLink } from "react-router-dom";
import "./apartmentElement.css";

const ApartmentElement = ({ title, cover, to }) => {
  return (
    <li className="cards_item">
      <NavLink exact to={to} className="card">
        <div className="card">
          <div className="card_image">
            <img src={cover} alt={`${title} cover`} />
          </div>
          <div className="card_content">
            <h2 className="card_title">{title}</h2>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default ApartmentElement;
