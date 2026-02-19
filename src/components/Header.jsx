import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/game-of-thrones">GOT</Link>
          </li>
          <li>
            <Link to="/memory">Memory</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
