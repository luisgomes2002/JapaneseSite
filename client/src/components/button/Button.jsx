import { ApplicationButton } from "./ButtonStyle.jsx";

export const Button = ({ type, text }) => {
  return <ApplicationButton type={type}>{text}</ApplicationButton>;
};
