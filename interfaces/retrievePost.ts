import { IPost } from "interfaces";

export default interface IRetrievePost extends IPost {
  comments: { [index: number]: IPost };
}
