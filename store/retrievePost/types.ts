import { IRetrievePost, IComment } from "interfaces";

export interface IRetrievePostState {
  post: IRetrievePost;
}
export const SET_RETRIEVE_POST = "SET_RETRIEVE_POST";
export const ADD_COMMENT = "ADD_COMMENT";

interface ISetRetrievePostAction {
  type: typeof SET_RETRIEVE_POST;
  payload: IRetrievePost;
}

interface IAddCommentAction {
  type: typeof ADD_COMMENT;
  payload: IComment;
}

export type IRetrievePostActionTypes =
  | ISetRetrievePostAction
  | IAddCommentAction;
