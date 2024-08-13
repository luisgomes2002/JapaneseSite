export const TextLimit = ({ text, limit, type }) => {
  const textLimited =
    text?.length > limit ? `${text.substring(0, limit)}...` : text;
  if (type == "text") return <p>{textLimited}</p>;
  else return <h2>{textLimited}</h2>;
};
