import { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const links = ["Se connecter", "Vous avez déjà un compte ?"];

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedContentIndex, setSelectedContentIndex] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (index) => {
    toggleMenu();
    setSelectedContentIndex(index);
  };

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <Link
              key={link}
              to={
                link === "Se connecter"
                  ? "/signin"
                  : link === "Vous avez déjà un compte ?"
                  ? "/signup"
                  : "/"
              }
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(index)}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export const Menu2 = () => {
  return <Layout />;
};
