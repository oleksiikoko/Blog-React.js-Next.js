import { axios } from "core";

export default {
  createComment: (post_id, body) =>
    axios.post("/comments", { postId: post_id, body: body }),
};
