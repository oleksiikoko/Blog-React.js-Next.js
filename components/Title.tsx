import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

const StyledTitle = styled.div`
  display: inline-block;
  padding: 0.7em 1.4em;
  margin: 0 0.3em 0.3em 0;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
`;
const Title: React.FC<IProps> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
