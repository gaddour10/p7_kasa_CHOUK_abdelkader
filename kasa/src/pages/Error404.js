import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <div className="footer_page">
      <Header />
      <div className="error_block">
        <div className="error_container">
          <p className="error_number">404</p>
          <p className="error_message">
            Oups ! La page que vous demandez n'existe pas.
          </p>
        </div>
        <NavLink to="/Kasa-P7-OpenClassrooms/">
          <div className="error_link">
            <p>Retournez sur la page d'accueil</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
