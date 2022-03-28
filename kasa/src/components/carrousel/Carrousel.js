import { useState } from "react";
import "./carrousel.css";

const Carrousel = ({ img }) => {
  const [counterImg, setCounterImg] = useState(0);

  const prevClick = () => {
    // naviger au counter
    if (counterImg === 0) {
      setCounterImg(img.length - 1);
    } else {
      setCounterImg(counterImg - 1);
    }
  };

  const nextClick = () => {
    if (counterImg === img.length - 1) {
      setCounterImg(0);
    } else {
      setCounterImg(counterImg + 1);
    }
  };

  return (
    <div className="container">
      <div className="leftArrow" onClick={prevClick}>
        ❰
      </div>
      <div className="displayFrame">
        {img.map((picture, index) => (
          <img
            className="carouselItem"
            src={picture}
            key={index}
            alt={`visuelle de l'appartement numéro ${index}`}
          />
        ))}
      </div>
      <div className="rightArrow" onClick={nextClick}>
        ❱
      </div>
      <div className="counterImg">
        {counterImg + 1} / {img.length}
      </div>
    </div>
  );
};

export default Carrousel;
