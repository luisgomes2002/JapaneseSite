import React, { useState } from "react";
import "./JapaneseLearner.css";
import NavBar from "../../../nav/NavBar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import Intro from "./introduction/Introduction";
import N5 from "./N5/N5";

const Learner = () => {
  const [currentLevel, setCurrentLevel] = useState(6);

  const toggleVisibility = (level) => {
    setCurrentLevel(level);
  };

  return (
    <>
      <nav>
        <NavBar />
        <Breadcrumb className="bread-itens-jlpt">
          <Breadcrumb.Item>
            <Link to="/">
              <i className="fa-solid fa-house"></i>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/japanese">Aprender Japonês</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Japonês</Breadcrumb.Item>
        </Breadcrumb>
      </nav>
      <div className="background">
        <div className="title-intro">
          <h1>Japonês</h1>
        </div>
        <div className="grid-level">
          <button onClick={() => toggleVisibility(6)}>INTRO</button>
          <button onClick={() => toggleVisibility(5)}>N5</button>
          <button onClick={() => toggleVisibility(4)}>N4</button>
          <button onClick={() => toggleVisibility(3)}>N3</button>
          <button onClick={() => toggleVisibility(2)}>N2</button>
          <button onClick={() => toggleVisibility(1)}>N1</button>
        </div>
        <div className="content-japanese">
          {currentLevel === 6 && (
            <div>
              <Intro />
            </div>
          )}
          {currentLevel === 5 && (
            <div>
              <N5 />
            </div>
          )}
          {currentLevel === 4 && <div>Conteúdo N4</div>}
          {currentLevel === 3 && <div>Conteúdo N3</div>}
          {currentLevel === 2 && <div>Conteúdo N2</div>}
          {currentLevel === 1 && <div>Conteúdo N1</div>}
        </div>
      </div>
    </>
  );
};

export default Learner;
