import React from "react";
import "./Portfolio.css";
import { itens } from "./PortfolioItens";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <div className="title-name">
        <h1>Murasaki Products</h1>
        <p style={{ textAlign: "center" }}>All services provided by Murasaki</p>
      </div>
      <div className="main-itens">
        {itens.map((importPort, index) => (
          <div key={importPort.id} className="card-space">
            <div className="space-portfolioImg">
              <img src={importPort.portfolioImg} alt="Imagem do portfólio" />
              <div className="info-card">
                <h1>{importPort.name}</h1>
                <p>{importPort.info}</p>
                <hr />
                <Link to={importPort.link}>
                  <button className="button-card">Page</button>
                </Link>
                <Link to={importPort.link}>
                  <button className="button-card">Info</button>
                </Link>
                <p>{importPort.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
