import NavBar from "../nav/NavBar";
import "./HomePage.scss";
import "./Services.css";
import { About, AboutBox } from "./AboutStyle";
import { PostsHome, AllPosts } from "./PostsStyle.jsx";
import { Benefits, BenefitsInfo, BenefitsInfoCard } from "./VantagensStyle.jsx";
import { Link } from "react-router-dom";
import Founder from "../../assets/eu/eu.jpeg";
import { useState, useEffect } from "react";
import { Card } from "../pages/community/Card";
import { getAllPosts } from "../../services/postsServices";

function Home() {
  const [posts, setPosts] = useState([]);

  const findAllPosts = async () => {
    const postResponse = await getAllPosts();
    setPosts(postResponse.data.results);
  };

  useEffect(() => {
    findAllPosts();
  }, []);

  return (
    <>
      <div className="home" id="home">
        <div className="home-container">
          <NavBar />
          <div className="home-imag">
            <h1 className="home-heading">Gosta da Cultura Japonesa?</h1>
            <p className="home-description">Qual é o seu interesse?</p>
            <button className="home-btn">
              <Link to="">Explore</Link>
            </button>
            {/* Criar um pagina com todos os serviços */}
          </div>
        </div>
      </div>
      <div className="categorias" id="categorias">
        <div className="categorias-wrapper">
          <div className="categorias-card">
            <div className="categorias-btns">
              <Link to="/japanese">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>APRENDA JAPONÊS</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card1">
            <div className="categorias-btns">
              <Link to="/">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>MORE NO JAPÃO</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card2">
            <div className="categorias-btns">
              <Link to="/">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>VIAJE PARA O JAPÃO</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card3">
            <div className="categorias-btns">
              <Link to="/creators">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>VEJA MAIS</h3>
                </span>
              </Link>
            </div>
          </div>
          <div className="categorias-card4">
            <div className="categorias-btns">
              <Link to="/community">
                <span className="span-btns">MOSTRE MAIS</span>
                <span className="span-card">
                  <h3>COMUNIDADE</h3>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <About>
        <h1>SOBRE</h1>
        <AboutBox>
          <img src={Founder} />
          <div>
            <p className="card-title">Sobre Murasaki</p>
            <p className="card-text">
              Olá! Seja bem-vindo ao MURASAKI, o site definitivo para todos
              aqueles que desejam embarcar na emocionante jornada de aprender
              japonês. Sou Luis Gomes, o criador deste projeto apaixonante, e
              estou entusiasmado em compartilhar com você tudo o que o MURASAKI
              tem a oferecer. Junte-se a nós no MURASAKI e comece sua jornada de
              aprendizado do japonês hoje mesmo. Vamos explorar juntos as
              maravilhas deste idioma único e desbloquear um mundo de
              oportunidades!
            </p>
            <p className="card-text">Luis Gomes</p>
            <p className="card-text">Fundador da MURASAKI</p>
          </div>
        </AboutBox>
      </About>
      <PostsHome>
        <h1>Top Posts</h1>
        <AllPosts>
          {posts.map((item) => {
            return (
              <Card
                home={true}
                key={item.id}
                title={item.title}
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}
              />
            );
          })}
        </AllPosts>
      </PostsHome>
      <Benefits>
        <div>
          <img src="" />
        </div>
        <BenefitsInfo>
          <BenefitsInfoCard>
            <dic>
              <h3>Murasaki</h3>
              <p>
                Site criado para ensinar japonês gratuitamente a qualquer
                pessoa.
              </p>
            </dic>
          </BenefitsInfoCard>
          <BenefitsInfoCard>
            <div>
              <h3>Cursos online criados por </h3>
              <p>
                Nossos curso online foram desenvolvidos para auxiliá-lo a
                aprender japonês, não importando onde você esteja, em breve com
                vídeos.
              </p>
            </div>
          </BenefitsInfoCard>
          <BenefitsInfoCard>
            <div>
              <h3>Suporte é gratuito</h3>
              <p>
                Não cobramos pelo esclarecimento de dúvidas relacionadas ao
                japonês. Basta enviar-nos uma mensagem direta para obter ajuda.
              </p>
            </div>
          </BenefitsInfoCard>
        </BenefitsInfo>
      </Benefits>
    </>
  );
}

export default Home;
