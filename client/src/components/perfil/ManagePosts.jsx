import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddPostsContainer, ShowPost, SpanErrors } from "./ManagePostsStyle";
import { postsSchema } from "../schemas/postsSchema";
import {
  createPost,
  deletePost,
  editPost,
  getByIdPost,
} from "../../services/postsServices";
import { useEffect, useState } from "react";
import { TextLimit } from "../textLimit/TextLimit";
import { TagRecommendation, ignoreSet } from "../textLimit/TagRecommendation";

const ManagePosts = () => {
  const { action, id } = useParams();
  const navigate = useNavigate();
  const [imageLink, setImageLink] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState(["", "", "", ""]);
  const [text, setText] = useState("");
  const [tagsRecommendation, setTagsRecommendation] = useState(null);

  const {
    register,
    handleSubmit: handleRegisterPosts,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(postsSchema),
  });

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const registerPostSubmit = async (data) => {
    try {
      await createPost(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const editPostSubmit = async (data) => {
    try {
      await editPost(data, id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePostSubmit = async () => {
    try {
      await deletePost(id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const showTags = () => {
    const recommendation = TagRecommendation({ text, ignoreSet });
    const allTags = Object.values(recommendation).flat();

    if (Array.isArray(allTags)) {
      setTagsRecommendation(allTags);
      console.error("Unexpected recommendation format:", recommendation);
    }

    setTags(allTags);
    setValue("tags", allTags);
  };

  const getPost = async (id) => {
    try {
      const { data } = await getByIdPost(id);

      setTitle(data.title);
      setImageLink(data.banner);
      setTags(data.tags);
      setLinks(data.links || ["", "", "", ""]);
      setText(data.text);

      setValue("title", data.title);
      setValue("banner", data.banner);
      setValue("tags", data.tags);
      setValue("links", data.links || ["", "", "", ""]);
      setValue("text", data.text);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (action === "edit" || action === "delete") {
        await getPost(id);
      }
    };

    fetchData();
  }, [action, id]);

  return (
    <>
      <ShowPost>
        <div>
          <img src={imageLink || "Img"} alt="banner" />
        </div>
        <div>
          <h1>{title || "Title"}</h1>
          <TextLimit text={text || "Text"} limit={860} />
          <h3>{tags || "Tags"}</h3>
        </div>
        <div>
          {links.map((link, index) => (
            <h2 key={index}>{link || `Link ${index + 1}`}</h2>
          ))}
        </div>
      </ShowPost>
      <AddPostsContainer>
        <h2>
          {action === "add"
            ? "Adicionar"
            : action === "edit"
            ? "Atualizar"
            : "Apagar"}{" "}
          Post
        </h2>
        <form
          onSubmit={
            action === "add"
              ? handleRegisterPosts(registerPostSubmit)
              : action === "edit"
              ? handleRegisterPosts(editPostSubmit)
              : handleRegisterPosts(deletePostSubmit)
          }
        >
          <input
            type="text"
            placeholder="Titulo"
            name="title"
            {...register("title")}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link da imagem"
            name="banner"
            {...register("banner")}
            onChange={(e) => setImageLink(e.target.value)}
          />
          <section>
            <input
              type="text"
              placeholder="Tags"
              name="tag"
              {...register("tags")}
              onChange={(e) =>
                setTags(e.target.value.split("").map((tag) => tag.trim()))
              }
            />
            <button
              type="button"
              onClick={() => {
                showTags();
              }}
            >
              Gerar Tags
            </button>
          </section>
          {links.map((link, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Link ${index + 1}`}
              name={`links[${index}]`}
              {...register(`links[${index}]`)}
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          ))}
          <textarea
            type="text"
            placeholder="Texto"
            name="text"
            {...register("text")}
            onChange={(e) => setText(e.target.value)}
          />
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
            {action === "add"
              ? "Adicionar"
              : action === "edit"
              ? "Atualizar"
              : "Apagar"}
          </button>
          <SpanErrors>
            {errors.title && <span>{errors.title.message}</span>}
            {errors.banner && <span>{errors.banner.message}</span>}
            {errors.tags && <span>{errors.tags.message}</span>}
            {errors.text && <span>{errors.text.message}</span>}
          </SpanErrors>
        </form>
      </AddPostsContainer>
    </>
  );
};

export default ManagePosts;
