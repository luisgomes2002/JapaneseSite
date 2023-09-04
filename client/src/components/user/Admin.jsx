import React, { useState, useEffect, Component } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import NavBar from "../nav/NavBar";
import "./User.css";
import Baka from "../../assets/baka/background/background.jpg";
import axios from "axios";
import { videoAbout } from "../pages/videos/JlptVideosEx";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class Loop extends Component {
  render() {
    return (
      <div>
        {videoAbout.map((dados) => (
          <div className="posts-space">
            <div></div>
            <div className="link-count" style={{ color: "#fff" }}>
              <i className="fa-solid fa-heart fa-xl"></i>
              <p>0</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const AdminPage = ({ post, emptyHeading }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  //const [gender, setGender] = useState('')
  const [id, setId] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  //client
  const [info, setInfo] = useState([]);
  const [deleteInfo, setDeleteInfo] = useState([]);

  //Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getUsersForTable();
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

  const getUsersForTable = () => {
    axios.get("http://localhost:3001/userfortable").then((response) => {
      setInfo(response.data);
    });
  };

  const Modal = ({ isOpen, onClose, selectedUser }) => {
    if (!isOpen) return null;

    const deleteUser = (id) => {
      axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        setDeleteInfo(
          deleteInfo.filter((val) => {
            return val.user_id !== id;
          })
        );
      });
    };

    return (
      <div className="modal-delete">
        <div className="modal-content-delete">
          <h1>Excluir Conta '{selectedUser.user_name}'</h1>
          <hr />
          <div className="grid-delete-user">
            <img src={profileImage ? profileImage : Baka} />
            <div className="info-modal-user">
              <p>ID: {selectedUser.user_id}</p>
              <p>Email: {selectedUser.user_email}</p>
              <p>Admin: ?</p>
            </div>
          </div>
          <hr />
          <button
            className="delete-button"
            onClick={() => {
              deleteUser(selectedUser.user_id);
              closeModal();
              window.location.reload();
            }}
          >
            Delete
          </button>
          <button
            className="cancelar-button"
            onClick={() => {
              closeModal();
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
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
            <p>Self-introduction: </p>
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
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="posts" title="Posts">
                    <Scrollbars style={{ height: 560 }}>
                      <Loop />
                    </Scrollbars>
                  </Tab>
                  <Tab eventKey="users" title="Users">
                    <table>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Admin</th>
                      </tr>
                      <tbody>
                        {info.map((val, key) => {
                          return (
                            <React.Fragment key={key}>
                              <tr>
                                <td>{val.user_id}</td>
                                <td>{val.user_name}</td>
                                <td>{val.user_email}</td>
                                <td>{val.user_age}</td>
                                <td>{val.admin} </td>
                                <button
                                  style={{ marginTop: "7%" }}
                                  className="delete-button"
                                  onClick={() => openModal(val)}
                                >
                                  Delete
                                </button>
                                {modalOpen &&
                                  selectedUser &&
                                  selectedUser.user_id === val.user_id && (
                                    <Modal
                                      isOpen={modalOpen}
                                      onClose={closeModal}
                                      selectedUser={selectedUser}
                                    />
                                  )}
                              </tr>
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </Tab>
                </Tabs>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
