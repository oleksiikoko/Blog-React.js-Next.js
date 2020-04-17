import React, { useState } from "react";

import { IPost } from "interfaces";

const UpdatePost: React.FC<{
  post: IPost;
  sendUpdate: Function;
  sendDelete: Function;
}> = ({ post, sendUpdate, sendDelete }) => {
  const [update, setUpdate] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(post ? post.title : "");
  const [updateBody, setUpdateBody] = useState(post ? post.body : "");

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
          <button onClick={() => setUpdate(true)}>Update</button>
          <button onClick={() => sendDelete(post.id)}>Delete</button>
        </>
      ) : (
        <>
          <input type="text" value={updateTitle} onChange={changeTitle} />
          <input type="text" value={updateBody} onChange={changeBody} />
          <button onClick={() => sendUpdate(post.id, updateTitle, updateBody)}>
            Confirm
          </button>
          <button onClick={() => setUpdate(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default UpdatePost;
