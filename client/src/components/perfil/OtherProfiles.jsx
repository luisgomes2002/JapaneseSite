import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findUser } from "../../services/userServices";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const { username } = useParams();

  const getProfile = async () => {
    try {
      const response = await findUser(username);
      setProfileInfo(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [username]);

  return (
    <>
      <h1>ola @{profileInfo.name}</h1>
    </>
  );
};

export default Profile;
