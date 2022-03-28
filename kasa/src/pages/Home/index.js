import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApartmentList from "../../components/apartment-list/ApartmentList.js";

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

  // console.log({ props });
  return (
    <>
      <ApartmentList />
    </>
  );
};

export default Home;
