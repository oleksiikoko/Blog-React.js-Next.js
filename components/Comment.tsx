import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

const StyledComment = styled.div`
  display: inline-block;
  padding: 0.3em 2em;
  margin: 0 0.3em 0.3em 0;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
`;
const Comment: React.FC<IProps> = ({ text }) => {
  return <StyledComment>{text}</StyledComment>;
};

export default Comment;
