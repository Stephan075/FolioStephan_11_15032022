import "./apartment-list.css";
import ApartmentElement from "./apartmentElement/ApartmentElement";
import Logements from "../../data/logements.json";

const ApartmentList = (props) => {
  // console.log({ props });
  return (
    <section className="ApartmentList">
      <ul className="cards">
        {Logements.map(({ id, title, cover }) => (
          <ApartmentElement
            id={id}
            key={id}
            title={title}
            cover={cover}
            to={`apartementDetails/${id}`}
          />
        ))}
      </ul>
    </section>
  );
};

export default ApartmentList;
