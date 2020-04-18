import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

const StyledBody = styled.div`
  display: inline-block;
  padding: 0.7em 1.4em;
  margin: 0 0.3em 0.3em 0;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
`;
const Body: React.FC<IProps> = ({ text }) => {
  return <StyledBody>{text}</StyledBody>;
};

export default Body;
