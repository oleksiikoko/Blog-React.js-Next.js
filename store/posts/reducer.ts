import {
  IPostsState,
  // CREATE_POST,
  // UPDATE_POST,
  // DELETE_POST,
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
    case SET_POSTS:
      return {
        posts: action.payload,
      };
    default:
      return state;
  }
};
