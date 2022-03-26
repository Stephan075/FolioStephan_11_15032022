import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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

const Home = (props) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log("test");
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

  console.log({ props });
  return (
    <>
      {/* <E404 /> <Footer /> */}
      {/* <Header /> */}
      {/* <AboutBanner /> */}
      {/* <HerroBanner /> */}
      <ApartmentList />
      {/* <Rating /> */}
      {/* <AboutPage /> */}
      {/* <Footer /> */}
      {/* <ApartmentList /> */}
    </>
  );
};

export default Home;
