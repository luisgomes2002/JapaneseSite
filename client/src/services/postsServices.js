import axios from 'axios';

const baseUrl = "http://localhost:3001";

export const getAllPosts = () => {
  const response = axios.get(`${baseUrl}/posts`)
  return response;
}

export const getTopPost = () => {
  const response = axios.get(`${baseUrl}/posts/top`)
  return response;
}

export const getSearchPost = (title) => {
  const response = axios.get(`${baseUrl}/posts/search?title=${title}`) 
  return response
}