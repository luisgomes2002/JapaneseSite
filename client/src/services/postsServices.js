import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:3001";

export const getAllPosts = () => {
  const response = axios.get(`${baseUrl}/posts`);
  return response;
};

export const getTopPost = () => {
  const response = axios.get(`${baseUrl}/posts/top`);
  return response;
};

export const getSearchPost = (title) => {
  const response = axios.get(`${baseUrl}/posts/search?title=${title}`);
  return response;
};

export const getAllPostsByUser = (username) => {
  const response = axios.get(`${baseUrl}/posts/byUserUsername/${username}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getByIdPost = (postId) => {
  const response = axios.get(`${baseUrl}/posts/byIdPost/${postId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const likeFunction = (id) => {
  const response = axios.patch(
    `${baseUrl}/posts/${id}/like`,
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};
