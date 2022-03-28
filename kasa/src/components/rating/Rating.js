import "./rating.css";

const Rating = ({ rating }) => {
  const range = [1, 2, 3, 4, 5];
  return (
    // <i className="fa-solid fa-star star-color-red"></i>
    // <i className="fa-solid fa-star"></i>
    <div>
      {range.map((rangeElem) => (
        <i
          className={`fas fa-star${
            rangeElem <= rating ? " star-color-red" : ""
          }`}
          key={`star-${rangeElem}`}
        ></i>
      ))}
    </div>
  );
};

export default Rating;
