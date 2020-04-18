import { axios } from "core";

export default {
  createComment: (postId, body) =>
    axios.post("/comments", { postId: postId, body: body }),
};
