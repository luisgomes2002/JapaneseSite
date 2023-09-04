import React, { useState, useEffect } from "react";
import "./CreatorsPage.css";
import NavBar from "../../../nav/NavBar";
import { CreatorsInfo } from "./CreatorsInfo";
import { EstudoInfo } from "./Estudo";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const InfoArea = ({ data }) => {
  const [indicesAtuais, setIndicesAtuais] = useState(data.map(() => 0));

  useEffect(() => {
    const timers = data.map((_, index) =>
      setInterval(() => {
        setIndicesAtuais((indices) =>
          indices.map((indiceAtual, i) =>
            i === index
              ? (indiceAtual + 1) % CreatorsInfo[i].imgC.length
              : indiceAtual
          )
        );
      }, 2000)
    );

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <div className="background-area-creators">
      <div className="geral-area">
        <div className="creators-area">
          <AnimatePresence mode="wait">
            {data.map((info, index) => {
              const indiceAtual = indicesAtuais[index];
              return (
                <motion.div
                  className="creators-info--space"
                  key={info.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="creators-info--space" key={info.id}>
                    <div className="info-creators">
                      <div className="img-space-creators">
                        <img className="img-channel" src={info.img} alt="" />
                        <img
                          src={info.imgC[indiceAtual % info.imgC.length]}
                          alt=""
                        />
                      </div>
                      <div className="info-text-area">
                        <Link to={info.link[2]}>
                          <h1>{info.name}</h1>
                        </Link>
                        <h2>{info.text}</h2>
                        <p>{info.sub}</p>
                      </div>
                      <div className="link-area">
                        {info.link.map(
                          (link, i) =>
                            link && (
                              <Link
                                key={i}
                                to={link}
                                target="react/jsx-no-target-blank"
                              >
                                <i
                                  className={`fab fa-${
                                    i === 0
                                      ? "twitch"
                                      : i === 1
                                      ? "instagram"
                                      : i === 2
                                      ? "youtube"
                                      : "twitter"
                                  }`}
                                ></i>
                              </Link>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Entretenimento = () => <InfoArea data={CreatorsInfo} />;
const Estudo = () => <InfoArea data={EstudoInfo} />;

const CreatorsArea = () => {
  const [currentLevel, setCurrentLevel] = useState(1);

  const toggleVisibility = (level) => {
    setCurrentLevel(level);
  };

  return (
    <div className="content-creators">
      <nav>
        <NavBar />
      </nav>
      <div className="title-area-creators">
        <div className="title-space">
          <h1>Youtubers do Japão</h1>
          <h1>&</h1>
          <h1>Estudo de idiomas</h1>
        </div>

        <div className="buttons-local">
          <button onClick={() => toggleVisibility(1)}>Entretenimento</button>
          <button onClick={() => toggleVisibility(2)}>Estudo de Japonês</button>
          <button onClick={() => toggleVisibility(3)}>会話</button>
          <button onClick={() => toggleVisibility(4)}>Estudo de Idiomas</button>
        </div>
      </div>
      {currentLevel === 2 && (
        <div>
          <Estudo />
        </div>
      )}
      {currentLevel === 1 && (
        <div>
          <Entretenimento />
        </div>
      )}
    </div>
  );
};

export default CreatorsArea;
