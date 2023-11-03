import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:3001";

export const signup = (data) => {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar:
      "https://2.bp.blogspot.com/-0nuFe-aYvcw/XOWesruC4tI/AAAAAAAAcTc/Sfv7yxfULJ40g2Uczlp-RO6HJmkVfCEwwCLcBGAs/s1600/kawaii-cute-fofo-anime-gif%2B%25289%2529.gif",
    background:
      "https://i.pinimg.com/originals/09/24/4c/09244c7f7dd4d17b0484370f32db6641.gif",
  };
  const response = axios.post(`${baseUrl}/user/create`, body);
  return response;
};

export const signin = (data) => {
  const response = axios.post(`${baseUrl}/auth/login`, data);
  return response;
};

export const userLogged = () => {
  const response = axios.get(`${baseUrl}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

const generateUserName = (name) => {
  const nameLowerWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerWithoutSpaces}${randomNumber}`;
};
