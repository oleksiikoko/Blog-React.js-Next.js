import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: Function;
  name: string;
}

const StyledButton = styled.div`
  height: 30px;
  border: 2px solid black;
  border-radius: 8px;
  background: transparent;
  padding: 5px 10px 0 10px;
  font-size: 14px;
  color: black;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  /* position: relative; */
  cursor: pointer;
`;
const Button: React.FC<IProps> = ({ onClick, name }) => {
  return <StyledButton onClick={() => onClick()}>{name}</StyledButton>;
};

export default Button;
