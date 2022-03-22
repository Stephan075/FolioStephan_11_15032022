import "./apartmentElement.css";

const ApartmentElement = () => {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
        </div>
        <div className="card_content">
          <h2 className="card_title">
            Magnifique appartement proche Canal Saint Martin
          </h2>
        </div>
      </div>
    </li>
  );
};

export default ApartmentElement;
