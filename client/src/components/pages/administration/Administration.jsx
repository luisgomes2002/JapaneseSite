import { useContext, useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../../services/userServices";
import { AllUsersInfo, Pagination } from "./AdministrationStyle";
import NavBar from "../../nav/NavBar";
import { TextLimit } from "../../textLimit/TextLimit";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Administration = () => {
  const { user } = useContext(UserContext);
  const [usersInfo, setUsersInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);
  const navigate = useNavigate();

  const checkPermission = () => {
    if (user && user.fullPermission !== true) navigate("/");
  };

  const fetchUsers = async () => {
    const usersResponse = await getAllUsers();
    setUsersInfo(usersResponse.data);
  };

  const deleteAccount = async (userAccountId) => {
    await deleteUser(userAccountId);
  };

  useEffect(() => {
    checkPermission();
    fetchUsers();
  }, [usersInfo]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersInfo.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(usersInfo.length / usersPerPage);

  return (
    <>
      <nav style={{ backgroundColor: "#121214" }}>
        <NavBar />
      </nav>
      <Pagination style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </Pagination>
      <AllUsersInfo>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Username</th>
              <th>Email</th>
              <th>Full Permission</th>
              <th>Deletar user</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  <TextLimit text={user.name} limit={25} />
                </td>
                <td>
                  <Link to={`/profile/${user.username}`}>
                    <TextLimit text={user.username} limit={25} />
                  </Link>
                </td>
                <td>
                  <TextLimit text={user.email} limit={35} />
                </td>
                <td
                  style={
                    user.fullPermission
                      ? { color: "green" }
                      : { color: "black" } && { width: "20px" }
                  }
                >
                  {user.fullPermission ? "True" : "False"}
                </td>

                <button onClick={() => deleteAccount(user._id)}>Deletar</button>
              </tr>
            ))}
          </tbody>
        </table>
      </AllUsersInfo>
    </>
  );
};

export default Administration;
