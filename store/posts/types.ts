import { IPosts, IPost } from "interfaces";

export interface IPostsState {
  posts: IPosts;
}

export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_POSTS = "SET_POSTS";

interface ICreatePostAction {
  type: typeof CREATE_POST;
  payload: IPost;
}

interface IUpdatePostAction {
  type: typeof UPDATE_POST;
  payload: IPost;
}

interface IDeletePostAction {
  type: typeof DELETE_POST;
  payload: { id: number };
}

interface ISetPostsAction {
  type: typeof SET_POSTS;
  payload: IPosts;
}

export type IPostActionTypes =
  | ICreatePostAction
  | IUpdatePostAction
  | IDeletePostAction
  | ISetPostsAction;
