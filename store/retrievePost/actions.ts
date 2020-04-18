import { postApi, commentApi } from "utils/api";

import { IRetrievePost, IComment } from "interfaces";
import {
  SET_RETRIEVE_POST,
  IRetrievePostActionTypes,
  ADD_COMMENT,
} from "./types";

const Actions = {
  setRetrievePost: (retrievePost: IRetrievePost): IRetrievePostActionTypes => {
    return {
      type: SET_RETRIEVE_POST,
      payload: retrievePost,
    };
  },
  addComment: (comment: IComment): IRetrievePostActionTypes => {
    return {
      type: ADD_COMMENT,
      payload: comment,
    };
  },
  fetchRetrievePosts: (postId) => (dispatch): Promise<void> => {
    return postApi
      .getRetrievePost(postId)
      .then((response) => {
        const { data, status } = response;

        if (status !== 200) {
          return Promise.reject();
        }

        dispatch(Actions.setRetrievePost(<IRetrievePost>data));
        return Promise.resolve();
      })
      .catch((err) => console.log(err));
  },
  fetchCreateComment: (postId, body) => (dispatch): void => {
    console.log(postId);
    commentApi.createComment(postId, body).then((response) => {
      const { data, status } = response;
      console.log(status);
      dispatch(Actions.addComment(<IComment>data));
    });
  },
};

export default Actions;
