import Carrousel from "../../components/carrousel/Carrousel.js";
import "./ApartementDetailsPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logements from "../../data/logements.json";
import Rating from "../../components/rating/Rating.js";
import Collapsible from "../../components/collapsible/Collapsible.js";

const ApartementDetailsPage = (props) => {
  // déclarer quelque élement quand atd dans le state
  const [apartement, setApartement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });
  // Id récupérer dans le param
  let { id } = useParams();

  useEffect(() => {
    Logements.map((logement) => {
      // pendant le map si l'ID corresponde au param on le recupérer et en lenvoie dans setApartement
      if (id === logement.id) {
        setApartement(logement);
      }
      return null;
    });
  }, [id]);

  return (
    <>
      <Carrousel img={apartement.pictures} />

      <div className="desciptionapartement">
        <h2 className="titleapartement">{apartement.title}</h2>
        <p className="subtitleapartement">{apartement.location}</p>
        <div className="profile">
          <h2 className="profile-username">{apartement.host.name}</h2>
          <div className="profile-image">
            <img src={apartement.host.picture} alt="" />
          </div>
        </div>

        <div className="ratingAndTaglogement">
          <ul className="tag">
            {apartement.tags.map((tag, index) => (
              <li key={index} className="tag-content">
                {tag}
              </li>
            ))}
          </ul>
          <Rating rating={apartement.rating} />
        </div>

        <div className="collapsible-container">
          <div className="collapsible-item">
            <Collapsible label="Description">
              <p>{apartement.description}</p>
            </Collapsible>
          </div>

          <div className="collapsible-item">
            <Collapsible label="Equipments">
              <ul className="collapse_list">
                {apartement.equipments.map((equipment) => (
                  <li key={equipment}> {equipment}</li>
                ))}
              </ul>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartementDetailsPage;
