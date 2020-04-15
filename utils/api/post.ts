import { axios } from "core";

export default {
  getListAllPost: () => axios.get("/posts"),
  getRetrievePost: (post_id) => axios.get(`/posts/${post_id}?_embed=comments`),
  createPost: (title, body) =>
    axios.post("/posts", {
      title: title,
      body: body,
    }),
  updatePost: (post_id, title, body) =>
    axios.put(`/posts/${post_id}`, {
      title: title,
      body: body,
    }),
  deletePost: (post_id) => axios.delete(`/posts/${post_id}`),
};
