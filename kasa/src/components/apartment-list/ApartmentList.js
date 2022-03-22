import "./apartment-list.css";
import ApartmentElement from "./apartmentElement/ApartmentElement";

const ApartmentList = () => {
  return (
    <section className="ApartmentList">
      <ul className="cards">
        <ApartmentElement />
        <ApartmentElement />
        <ApartmentElement />
        <ApartmentElement />
      </ul>
    </section>
  );
};

export default ApartmentList;
