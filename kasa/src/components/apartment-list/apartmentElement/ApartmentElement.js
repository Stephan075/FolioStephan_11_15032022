import "./apartmentElement.css";

const ApartmentElement = ({ title, cover }) => {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={cover} alt={`${title} cover`} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
        </div>
      </div>
    </li>
  );
};

export default ApartmentElement;
