import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo kasa" className="logo" />
      <nav className="navHeader">
        <div className="navItem">Accueil</div>
        <div className="navItem">A Propos</div>
      </nav>
    </header>
  );
};

export default Header;
