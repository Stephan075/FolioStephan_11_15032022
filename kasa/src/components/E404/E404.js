import "./e404.css";

const E404 = () => {
  return (
    <main className="e404">
      <h1 className="e404Status">404</h1>
      <h2 className="e404Message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <a href="/home" className="e404HomeLink">
        Retourner sur la page d’accueil
      </a>
    </main>
  );
};

export default E404;
