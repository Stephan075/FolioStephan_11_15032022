import "./heroBanner.css";
import bannerImg from "../../assets/heroBanner.png";

const HerroBanner = () => {
  return (
    <section className="heroBanner">
      <img src={bannerImg} alt="imageBanner" className="heroBannerImg" />
      <div className="heroBannerWrapper"></div>
      <h1 className="heroBannerText">Chez vous, partout et ailleurs</h1>
    </section>
  );
};

export default HerroBanner;
