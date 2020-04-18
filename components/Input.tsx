import React from 'react';
import styled from 'styled-components';

interface IProps {
    value: string;
    onChange: Function;
}

const Body: React.FC<IProps> = ({ value, onChange }) => {
    return <StyledInput type="text" value={value} onChange={onChange} />;
};

export default Body;

const StyledInput = styled.input`
    height: 30px;
    width: 80%;
    display: block;
    border: 2px solid black;
    border-radius: 8px;
    background: transparent;
    padding: 0 10px;
    font-size: 14px;
    color: black;
`;
