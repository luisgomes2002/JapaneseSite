import React, { useState, useEffect, Component } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import NavBar from "../nav/NavBar";
import "./User.css";
import Baka from "../../assets/baka/background/background.jpg";
import axios from "axios";
import { videoAbout } from "../pages/videos/JlptVideosEx";
import { Link } from "react-router-dom";

class Loop extends Component {
  render() {
    return (
      <div>
        {videoAbout.map((dados) => (
          <div className="posts-space">
            <div></div>
            <div className="link-count">
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>0</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const UserPage = ({ post, emptyHeading }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  //const [gender, setGender] = useState('')
  const [id, setId] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const getUsers = () => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setName(response.data.user.user_name);
        setAge(response.data.user.user_age);
        setId(response.data.user.user_id);
        //setGender(response.data.user.user_name)
        //setJapLevel(response.data.user.user_name)
      }
    });
  };

  post = videoAbout.length;
  const count = post;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Posts" : "Post";
    heading = count + " " + noun;
  }

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="profile-user">
        <div className="user-info">
          <div className="user-img">
            <img src={profileImage ? profileImage : Baka} />
            <input type="file" id="file" onChange={handleProfileImageChange} />
            <label htmlFor="file">
              <i className="fa-solid fa-image"></i>
            </label>
          </div>
          <div className="user-info-base">
            <div className="button-edit">
              <Link to={`/update/${id}`}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </div>
            <p>Name: {name}</p>
            <p>Age: {age ? age : "Nada informado"}</p>
            <p>Gender: {/*{gender ? gender : 'Nada informado'} */}</p>
            <p>
              Japanese level: {/*{JapLevel ? JapLevel : 'Nada informado'} */}
            </p>
            <p>Self-introduction:</p>
          </div>
        </div>
        <div className="user-post">
          <div className="user-info-num">
            <p>{heading}</p>
            <p>0 Seguidores</p>
            <p>0 Seguindo</p>
          </div>
          <div className="posts-area">
            <section>
              <div className="posts-container">
                <Scrollbars style={{ height: 640 }}>
                  <Loop />
                </Scrollbars>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
