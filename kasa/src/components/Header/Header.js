import "./header.css";
import logo from "../../assets/logo.png";
import { Route, Link, NavLink } from "react-router-dom";

const ListItemLink = ({ to, name }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className="navItem">
        <NavLink exact to={to} activeClassName="active" className="nav-link">
          {name}
        </NavLink>
      </li>
    )}
  />
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
