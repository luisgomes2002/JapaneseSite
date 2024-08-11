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
      "https://78.media.tumblr.com/20d4f088033d5693b7a619db690c08c7/tumblr_pafkz5PdMk1qkz08qo1_540.gif",
  };
  const response = axios.post(`${baseUrl}/user/create`, body);
  return response;
};

export const updateUser = (body, id) => {
  const response = axios.patch(`${baseUrl}/user/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
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

export const findUser = (username) => {
  const response = axios.get(`${baseUrl}/user/findByUsername/${username}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getAllUsers = () => {
  const response = axios.get(`${baseUrl}/user/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const followUser = (username) => {
  const response = axios.patch(
    `${baseUrl}/user/follow/${username}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const deleteUser = (userAccountId) => {
  const response = axios.delete(`${baseUrl}/user/delete/${userAccountId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    data: {
      userAccountId: userAccountId,
    },
  });
  return response;
};

export const deleteNotification = (userId, id) => {
  const response = axios.patch(
    `${baseUrl}/user/deleteNotification/${userId}/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

const generateUserName = (name) => {
  const nameLowerWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerWithoutSpaces}${randomNumber}`;
};
