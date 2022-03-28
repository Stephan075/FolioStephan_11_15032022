import { NavLink } from "react-router-dom";
import "./apartmentElement.css";

const ApartmentElement = ({ id, title, cover, to, props }) => {
  // console.log({ id });

  // console.log({ props });
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
      {/* <div className="card">
        <div className="card_image">
          <img src={cover} alt={`${title} cover`} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
        </div>
      </div> */}
    </li>
  );
};

export default ApartmentElement;
