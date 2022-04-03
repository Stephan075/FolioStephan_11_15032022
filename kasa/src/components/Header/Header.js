import "./header.css";
import logo from "../../assets/logo.png";
import { Route, NavLink, Link } from "react-router-dom";

const ListItemLink = ({ to, name }) => (
  <Route
    path={to}
    // match pour savoir si l'URL match ou non
    // Le composant est appelé même si la route ne match pas contrairement a render
    children={({ match }) => (
      <li className="navItem">
        <Link to={to} className={match ? "nav-link active" : "nav-link"}>
          {name}
        </Link>
      </li>
    )}
  />

  // Avec NavLink Pas besoin d'utiliser match, on peut utiliser  activeClassName pour lui passer des classes ou activeStyle pour lui passer un objet de style.

  // <Route
  //   path={to}
  //   children={({ match }) => (
  //     <li className="navItem">
  //       <NavLink exact to={to} activeClassName="active" className="nav-link">
  //         {name}
  //       </NavLink>
  //     </li>
  //   )}
  // />
);

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo kasa" className="logo" />
      <nav className="navHeader">
        <ul className="navList">
          <ListItemLink to="/accueil" name="Accueil" />
          <ListItemLink to="/about" name="A Propos" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
