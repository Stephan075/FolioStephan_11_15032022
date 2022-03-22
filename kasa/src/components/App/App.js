import AboutBanner from "../aboutBanner/AboutBanner.js";
import ApartmentList from "../apartment-list/ApartmentList.js";
import Collapsible from "../collapsible/Collapsible.js";
import E404 from "../E404/E404.js";
import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import HerroBanner from "../heroBanner/HeroBanner.js";
import Rating from "../rating/Rating.js";

function App() {
  return (
    <>
      {/* <E404 /> <Footer /> */}
      <Header />
      {/* <AboutBanner /> */}
      {/* <HerroBanner /> */}
      {/* <ApartmentList /> */}
      {/* <Rating /> */}
      <Collapsible label="Description">
        {/* enfant */}
        <p>
          Venez découvrir Paris en séjournant dans ce nid douillet au coeur du
          11ème. La vue sur le parc résidentiel saura vous reposer de vos
          longues journées de tourisme dans la capitale française. Et pour les
          plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra
          de découvrir la night-life parisienne à seulement 5 minutes de
          l'appartement.
        </p>
      </Collapsible>
      <Collapsible label="Équipements">
        <ul>
          <li>Parking</li>
          <li>Sèche Cheveux</li>
          <li>Machine à laver</li>
          <li>Wi-fi</li>
          <li>Cuisine équipée</li>
          <li>Télévision</li>
        </ul>
      </Collapsible>
    </>
  );
}

export default App;
