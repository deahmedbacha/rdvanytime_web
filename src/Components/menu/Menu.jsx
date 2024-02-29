import { useState } from "react";
import "./Menu.css";

const Praticien = () => (
  <Page title="Vous êtes praticien ?" content="Contenu pour les praticiens" />
);
const Apropos = () => <Page title="À propos" content="Contenu pour À propos" />;
const Contact = () => (
  <Page title="Contact" content="Contenu pour le contact" />
);
const Connecter = () => (
  <Page title="Se connecter" content="Contenu pour la connexion" />
);

const Page = ({ title, content }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  );
};

const links = ["Vous êtes praticien ?", "À propos", "Contact", "Se connecter"];

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
            <a
              key={link}
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(index)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <main className={`page ${isOpen}`}>
        {/* Contenu sélectionné */}
        {selectedContentIndex !== null && (
          <>
            {selectedContentIndex === 0 && <Praticien />}
            {selectedContentIndex === 1 && <Apropos />}
            {selectedContentIndex === 2 && <Contact />}
            {selectedContentIndex === 3 && <Connecter />}
          </>
        )}
      </main>
    </>
  );
};

export const Menu = () => {
  return <Layout />;
};
