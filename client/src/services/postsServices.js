import axios from 'axios';

const baseUrl = "http://localhost:3001";

export const getAllPosts =() => {
  const response = axios.get(`${baseUrl}/posts`)
  return response;
}