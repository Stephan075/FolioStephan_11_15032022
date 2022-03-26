import { useEffect } from "react";
import AboutBanner from "../../components/aboutBanner/AboutBanner.js";
import ApartmentList from "../../components/apartment-list/ApartmentList.js";
import Collapsible from "../../components/collapsible/Collapsible.js";
import E404 from "../../components/E404/E404.js";
import Footer from "../../components/footer/Footer.js";
import Header from "../../components/header/Header.js";
import HerroBanner from "../../components/heroBanner/HeroBanner.js";
import Rating from "../../components/rating/Rating.js";
import AboutPage from "../about/index.js";
import Logements from "./logements.json";

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/logements.json");

  //       const { logementsData } = await response.json();

  //       console.log(logementsData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {/* <E404 /> <Footer /> */}
      <Header />
      {/* <AboutBanner /> */}
      <HerroBanner />
      {/* <ApartmentList /> */}
      {/* <Rating /> */}
      {/* <AboutPage /> */}
      {/* <Footer /> */}
      <ApartmentList />
    </>
  );
}

export default App;
