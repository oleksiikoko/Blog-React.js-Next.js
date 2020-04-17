import { IPost, IComment } from "interfaces";

export default interface IRetrievePost extends IPost {
  comments: { [index: number]: IComment };
}
