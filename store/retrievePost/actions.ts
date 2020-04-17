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
      .then(({ data }) => {
        dispatch(Actions.setRetrievePost(<IRetrievePost>data));
        return Promise.resolve();
      })
      .catch((err) => console.log(err));
  },
  fetchCreateComment: (postId, body) => (dispatch): void => {
    commentApi.createComment(postId, body).then((response) => {
      const { data } = response;
      dispatch(Actions.addComment(<IComment>data));
    });
  },
};

export default Actions;
