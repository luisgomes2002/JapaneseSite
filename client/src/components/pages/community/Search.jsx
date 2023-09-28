// import NavBar from "../../nav/NavBar";
// import { Card } from "./Card";
// import { getAllPosts, getTopPost } from "../../../services/postsServices";
import { useParams } from "react-router";

const Search = () => {
  const { title } = useParams();
  return <h1>{title}</h1>;
};

export default Search;
