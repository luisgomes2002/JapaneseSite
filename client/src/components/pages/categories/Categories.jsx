import React, { useState } from "react";
import "./Categories.css";
import Nav from "../../nav/NavBar";
import { categoriesItens } from "./CategoriesItens";

const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (level, img) => {
    setModalOpen(level);
    setModalImg(img);
  };

  const handleMouseLeave = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const ModalScreen = ({ isOpen, img }) => {
    if (!isOpen) return null;

    const { x, y } = mousePosition;
    const modalStyle = {
      position: "fixed",
      top: y + "px",
      left: x + "px",
    };

    return (
      <div className="modal-screen" style={modalStyle}>
        <img src={img} alt="Modal" />
      </div>
    );
  };

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <section className="section-categories">
        {categoriesItens.map((info, key) => {
          return (
            <React.Fragment key={key}>
              <div className="categories">
                <hr />
                <div
                  className="name-categories"
                  onMouseEnter={() => handleMouseEnter(info.id, info.img)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <h1>{info.title}</h1>
                  <h3>{info.subTitle}</h3>
                </div>
              </div>
              <ModalScreen isOpen={modalOpen === info.id} img={modalImg} />
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Categories;
