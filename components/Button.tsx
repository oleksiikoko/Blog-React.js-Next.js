import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: Function;
  name: string;
}

const ButtonComponent: React.FC<IProps> = ({ onClick, name }) => {
  return <button onClick={() => onClick()}>{name}</button>;
};

const Button = styled(ButtonComponent)`
  color: palevioletred;
  font-weight: bold;
`;

export default Button;
