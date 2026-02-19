import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  console.log(location);

  const elements = [
    {
      pathname: "/",
      text: "Accueil",
    },
    {
      pathname: "/game-of-thrones",
      text: "GOT",
    },

    {
      pathname: "/memory",
      text: "Memory",
    },
    {
      pathname: "/pokemon/25",
      text: "Pikachu",
    },
  ];

  return (
    <>
      <nav>
        <ul>
          {elements.map((element) => {
            return (
              <li key={element.pathname}>
                <Link
                  className={
                    location.pathname === element.pathname ? "active" : ""
                  }
                  to={element.pathname}
                >
                  {element.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
