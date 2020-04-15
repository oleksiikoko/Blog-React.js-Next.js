import { postApi } from "utils/api";

import { IPosts, IPost } from "interfaces";
import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_POSTS,
  IPostActionTypes,
} from "./types";

const Actions = {
  createPost: (newPost: IPost): IPostActionTypes => {
    return {
      type: CREATE_POST,
      payload: newPost,
    };
  },

  updatePost: (newPost: IPost): IPostActionTypes => {
    return {
      type: UPDATE_POST,
      payload: newPost,
    };
  },

  deletePost: (postId: number): IPostActionTypes => {
    return {
      type: DELETE_POST,
      payload: { id: postId },
    };
  },

  setPosts: (posts: IPosts): IPostActionTypes => {
    return {
      type: SET_POSTS,
      payload: posts,
    };
  },

  // fetchCreatePost: () => (dispatch) :void => {

  // }

  fetchPosts: () => (dispatch): void => {
    postApi
      .getListAllPost()
      .then(({ data }) => {
        dispatch(Actions.setPosts(<IPosts>data));
        console.log(data);
      })
      .catch((err) => console.log(err));
  },
};

export default Actions;
