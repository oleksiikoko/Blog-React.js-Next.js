import values from "lodash/values";
import {
  IRetrievePostState,
  SET_RETRIEVE_POST,
  ADD_COMMENT,
  IRetrievePostActionTypes,
} from "./types";
import { IComment } from "interfaces";

const initialState: IRetrievePostState = {
  post: null,
};

export const retrievePostReducer = (
  state = initialState,
  action: IRetrievePostActionTypes
): IRetrievePostState => {
  switch (action.type) {
    case SET_RETRIEVE_POST:
      return {
        post: action.payload,
      };
    case ADD_COMMENT:
      const comments: IComment[] = [
        ...values(state.post.comments),
        action.payload,
      ];

      return {
        post: {
          ...state.post,
          comments: comments,
        },
      };
    default:
      return state;
  }
};
