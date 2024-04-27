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

export const commentCreate = (id, userMessage) => {
  const response = axios.patch(
    `${baseUrl}/posts/${id}/comment`,
    { message: userMessage },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const commentsDelete = (id, idComment) => {
  const response = axios.patch(
    `${baseUrl}/posts/${id}/${idComment}/comment`,
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const createPost = (body) => {
  const response = axios.post(`${baseUrl}/posts/create`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const editPost = (body, id) => {
  const response = axios.patch(`${baseUrl}/posts/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
