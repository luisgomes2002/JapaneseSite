import React, { useState } from "react";
import "./Categories.css";
import Nav from "../../nav/NavBar";
import { categoriesItens } from "./CategoriesItens";
import { Link } from "react-router-dom";

const Categories = () => {
  const [modalImg, setModalImg] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (img) => {
    setModalImg(img);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const ModalScreen = ({ img }) => {
    if (!img) return null;

    const { x, y } = mousePosition;
    const modalStyle = {
      position: "fixed",
      top: y + 10,
      left: x + 10,
    };

    return (
      <div className="modal-screen" style={modalStyle}>
        <img src={img} alt="Modal" />
      </div>
    );
  };

  return (
    <>
      <Nav />
      <section className="section-categories" onMouseMove={handleMouseMove}>
        {categoriesItens.map((info, key) => (
          <Link to={info.link}>
            <div className="categories" key={key}>
              <div
                className="name-categories"
                onMouseEnter={() => handleMouseEnter(info.img)}
              >
                <h1>{info.title}</h1>
                <h3>{info.subTitle}</h3>
              </div>
              <ModalScreen img={modalImg} />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Categories;
