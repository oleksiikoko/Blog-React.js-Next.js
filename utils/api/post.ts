import { axios } from "core";

export default {
  getListAllPost: () => axios.get("/posts"),
};
