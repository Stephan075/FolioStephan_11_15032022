import { useEffect, useState } from "react";
import ApartmentList from "../../components/apartment-list/ApartmentList.js";

const Home = (props) => {
  // Test fetch data
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log("test");
  //   fetch("./data/logements.json").then((logement) => {
  //     logement.json().then((logement) => {
  //       setData(logement);
  //       console.log(logement);
  //     });
  //   });
  // }, []);

  return (
    <>
      <ApartmentList />
    </>
  );
};

export default Home;
