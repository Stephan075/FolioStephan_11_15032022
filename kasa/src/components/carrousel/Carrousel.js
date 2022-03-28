import { useEffect } from "react";
import { useState } from "react";
import "./carrousel.css";

const Carrousel = ({ img }) => {
  const [counterImg, setCounterImg] = useState(-1);
  const [currImg, setCurrImg] = useState("");

  useEffect(() => {
    setCurrImg(img[0]);
  }, [img]);

  // next img
  const nextClick = () => {
    setCounterImg((counterImg + 1) % img.length);

    setCurrImg(img[Math.abs(counterImg)]);
  };
  // // next img
  // const nextClick = () => {
  //   setCounterImg((counterImg + 1) % img.length);
  //   // if (counterImg === 0) {
  //   //   setCounterImg(img.length - 1);
  //   //   console.log(img);
  //   // } else {
  //   //   setCounterImg(counterImg - 1);
  //   // }
  //   setCurrImg(img[Math.abs(counterImg)]);
  // };

  // prev img
  const prevClick = () => {
    // ex: Modulo on va rester entre  % 6 img return 0
    setCounterImg((counterImg - 1) % img.length);
    // Math.abs val abs du cunter
    setCurrImg(img[Math.abs(counterImg)]);
  };

  return (
    <div className="container">
      <div className="leftArrow" onClick={prevClick}>
        ❰
      </div>
      <div className="displayFrame">
        <img
          className="carouselItem"
          src={currImg}
          alt={`visuelle de l'appartement numéro `}
        />
      </div>
      <div className="rightArrow" onClick={nextClick}>
        ❱
      </div>
      <div className="counterImg">
        {/* {Math.abs(counterImg === -1 ? 1 : counterImg + 1)} / {img.length} */}
        {/* {Math.abs(counterImg === 1 ? 1 : counterImg + 1)} / {img.length} */}
        {Math.abs(counterImg + 1)} / {img.length}
      </div>
    </div>
  );
};

export default Carrousel;
