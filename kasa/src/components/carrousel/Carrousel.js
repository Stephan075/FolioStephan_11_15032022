import { useEffect, useState } from "react";
import "./carrousel.css";

const Carrousel = ({ img }) => {
  const [currImg, setCurrImg] = useState(0);

  // next img
  const nextClick = () => {
    const index = currImg < img.length - 1 ? currImg + 1 : 0;
    setCurrImg(index);
  };

  // prev img
  const prevClick = () => {
    const index = currImg > 0 ? currImg - 1 : img.length - 1;
    setCurrImg(index);
  };

  return (
    <div className="container">
      <div className="leftArrow" onClick={prevClick}>
        ❰
      </div>
      <div className="displayFrame">
        <img
          className="carouselItem"
          src={img[currImg]}
          alt={`visuelle de l'appartement numéro `}
        />
      </div>
      <div className="rightArrow" onClick={nextClick}>
        ❱
      </div>
      <div className="counterImg">
        {currImg + 1} / {img.length}
      </div>
    </div>
  );
};

export default Carrousel;
