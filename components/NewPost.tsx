import React from 'react';

import { Input, Button } from 'components';

interface IProps {
    titleValue: string;
    titleOnChange: Function;
    bodyValue: string;
    bodyOnChange: Function;
    onSubmit: Function;
}

const NewPost: React.FC<IProps> = ({ titleValue, titleOnChange, bodyValue, bodyOnChange, onSubmit }) => (
    <>
        <Input value={titleValue} onChange={titleOnChange} />
        <Input value={bodyValue} onChange={bodyOnChange} />
        <Button onClick={onSubmit} name="Create post" />
    </>
);

export default NewPost;
