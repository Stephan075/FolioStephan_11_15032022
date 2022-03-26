import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo kasa" className="logo" />
      <nav className="navHeader">
        <Link to="/" className="navItem">
          Accueil
        </Link>
        <Link to="/about" className="navItem">
          A Propos
        </Link>
        {/* <div className="navItem">Accueil</div>
        <div className="navItem">A Propos</div> */}
      </nav>
    </header>
  );
};

export default Header;
