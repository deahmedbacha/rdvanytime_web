import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./styles.css";

const Praticien = () => (
  <Page
    title="Vous êtes praticien ?"
    content={``}
  />
);
const Apropos = () => (
  <Page
    title="À propos"
    content={``}
  />
);
const Contact = () => (
  <Page
    title="Contact"
    content={``}
  />
);
const Connecter = () => (
  <Page
    title="Se connecter"
    content={``}
  />
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
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href) => {
    toggleMenu();
    navigate(href);
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
              onClick={() => onClick(link)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <main className={`page ${isOpen}`}>
        <Outlet />
      </main>
    </>
  );
};

export const Menu = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="praticien" element={<Praticien />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="connecter" element={<Connecter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
