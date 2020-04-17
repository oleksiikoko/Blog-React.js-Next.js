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

  fetchPosts: () => (dispatch): Promise<void> => {
    return postApi
      .getListAllPost()
      .then(({ data }) => {
        dispatch(Actions.setPosts(<IPosts>data));
        return Promise.resolve();
      })
      .catch((err) => console.log(err));
  },
  fetchDeletePost: (postId) => (dispatch): Promise<void> => {
    return postApi.deletePost(postId).then((data) => {
      console.log("data", data);
      dispatch(Actions.deletePost(postId));
      return Promise.resolve();
    });
  },
  fetchUpdatePost: (postId, title, body) => (dispatch): Promise<void> => {
    return postApi.updatePost(postId, title, body).then(({ data }) => {
      console.log("data", data);
      dispatch(
        Actions.updatePost({
          id: data.id,
          title: data.title,
          body: data.body,
        })
      );
      return Promise.resolve();
    });
  },
};

export default Actions;
