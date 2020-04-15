import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AxiosResponse } from "axios";

import { postApi } from "utils/api";

import { IPosts } from "interfaces";

const Index = (props) => {
  console.log(props);
  // postApi.createPost("Privet ", "Maks)");
  // postApi.updatePost(13, "Kak ", "Dela?");
  return <div>Welcome to Nexit.js!</div>;
};

Index.getInitialProps = async () => {
//   const props: AxiosResponse<IPosts> = await postApi.getListAllPost();
//   return props.data;
// };



export default Index;
