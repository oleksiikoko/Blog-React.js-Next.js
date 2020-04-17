import values from "lodash/values";
import {
  IPostsState,
  // CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_POSTS,
  IPostActionTypes,
} from "./types";

const initialState: IPostsState = {
  posts: null,
};

export const postReducer = (
  state = initialState,
  action: IPostActionTypes
): IPostsState => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        posts: values(state.posts).map((post) => {
          if (post.id !== Number(action.payload.id)) {
            return action.payload;
          }
          return post;
        }),
      };
    case DELETE_POST:
      return {
        posts: values(state.posts).filter(
          (post) => post.id !== Number(action.payload)
        ),
      };
    case SET_POSTS:
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};
