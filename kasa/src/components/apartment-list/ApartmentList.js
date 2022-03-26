import "./apartment-list.css";
import ApartmentElement from "./apartmentElement/ApartmentElement";
import Logements from "../../data/logements.json";

const ApartmentList = () => {
  return (
    <section className="ApartmentList">
      <ul className="cards">
        {Logements.map(({ id, title, cover }) => (
          <ApartmentElement key={id} title={title} cover={cover} />
        ))}
      </ul>
    </section>
  );
};

export default ApartmentList;
