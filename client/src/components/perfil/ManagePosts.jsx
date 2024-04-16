import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddPostsContainer, ShowPost } from "./ManagePostsStyle";
import { postsSchema } from "../schemas/postsSchema";
import { createPost } from "../../services/postsServices";
import { useState } from "react";
import { TextLimit } from "../textLimit/TextLimit";

const ManagePosts = () => {
  const { action } = useParams();
  const navigate = useNavigate();
  const [imageLink, setImageLink] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [link4, setLink4] = useState("");
  const [text, setText] = useState("");

  const {
    register,
    handleSubmit: handleRegisterPosts,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postsSchema),
  });

  const registerPostSubmit = async (data) => {
    try {
      await createPost(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const editPostSubmit = async (data) => {
    // try {
    //   await editPost(data);
    //   navigate("/profile/:username");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <ShowPost>
        <div>
          <img src={imageLink || "Img"} alt="" />
        </div>
        <div>
          <h1>{title || "Tags"}</h1>
          <TextLimit text={text || "Text"} limit={860} />
          <h3>{tags || "Tags"}</h3>
        </div>
        <div>
          <h2>{link1 || "Link 1"}</h2>
          <h2>{link2 || "Link 2"}</h2>
          <h2>{link3 || "Link 3"}</h2>
          <h2>{link4 || "Link 4"}</h2>
        </div>
      </ShowPost>
      <AddPostsContainer>
        <h2>{action == "add" ? "Adicionar" : "Atualizar"} Post</h2>
        <form
          onSubmit={
            action == "add"
              ? handleRegisterPosts(registerPostSubmit)
              : handleRegisterPosts(editPostSubmit)
          }
        >
          <input
            type="text"
            placeholder="Titulo"
            name="title"
            {...register("title")}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span>{errors.title.message}</span>}

          <input
            type="text"
            placeholder="Link da imagem"
            name="banner"
            {...register("banner")}
            onChange={(e) => setImageLink(e.target.value)}
          />
          {errors.banner && <span>{errors.banner.message}</span>}

          <input
            type="text"
            placeholder="Tags"
            name="tag"
            {...register("tags")}
            onChange={(e) => setTags(e.target.value)}
          />
          {errors.tag && <span>{errors.tag.message}</span>}

          <input
            type="text"
            placeholder="Link 1"
            name="links"
            {...register("links")}
            onChange={(e) => setLink1(e.target.value)}
          />

          {/* <input
            type="text"
            placeholder="Link 2"
            name="links"
            {...register("link")}
            onChange={(e) => setLink2(e.target.value)}
          />

          <input
            type="text"
            placeholder="Link 3"
            name="links"
            {...register("link")}
            onChange={(e) => setLink3(e.target.value)}
          />

          <input
            type="text"
            placeholder="Link 4"
            name="links"
            {...register("link")}
            onChange={(e) => setLink4(e.target.value)}
          /> */}

          <textarea
            type="text"
            placeholder="Texto"
            name="text"
            {...register("text")}
            onChange={(e) => setText(e.target.value)}
          />
          {errors.text && <span>{errors.text.message}</span>}

          <button
            type="submit"
            text={
              action === "add"
                ? "Adicionar"
                : action === "edit"
                ? "Atualizar"
                : "Apagar"
            }
          >
            {action}
          </button>
        </form>
      </AddPostsContainer>
    </>
  );
};

export default ManagePosts;
