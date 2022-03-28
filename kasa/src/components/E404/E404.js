import { Link } from "react-router-dom";
import "./e404.css";

const NotFound = () => {
  return (
    <main className="e404">
      <h1 className="e404Status">404</h1>
      <h2 className="e404Message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="e404HomeLink">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default NotFound;
