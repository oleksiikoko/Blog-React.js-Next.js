import React, { useState } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';

import { IPost } from 'interfaces';

const UpdatePost: React.FC<{
    post: IPost;
    sendUpdate: Function;
    sendDelete: Function;
}> = ({ post, sendUpdate, sendDelete }) => {
    const [update, setUpdate] = useState(false);
    const [updateTitle, setUpdateTitle] = useState(post ? post.title : '');
    const [updateBody, setUpdateBody] = useState(post ? post.body : '');

    const changeTitle = (event) => {
        setUpdateTitle(event.target.value);
    };

    const changeBody = (event) => {
        setUpdateBody(event.target.value);
    };

    return (
        <div className="post__edit">
            {!update ? (
                <>
                    <Button onClick={() => setUpdate(true)} name="Update" />
                    <Button onClick={() => sendDelete(post.id)} name="Delete" />
                </>
            ) : (
                <>
                    <label>Title</label>
                    <Input value={updateTitle} onChange={changeTitle} />
                    <label>Text</label>
                    <Input value={updateBody} onChange={changeBody} />
                    <Button onClick={() => sendUpdate(post.id, updateTitle, updateBody)} name="Confirm" />
                    <Button onClick={() => setUpdate(false)} name="Cancel" />
                </>
            )}
        </div>
    );
};

export default UpdatePost;
