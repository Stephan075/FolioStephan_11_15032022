import "./footer.css";
import logo from "../../assets/logo_footer.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="logo kasa" className="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
