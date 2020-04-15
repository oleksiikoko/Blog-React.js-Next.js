import React from "react";
import { AxiosResponse } from "axios";

import { postApi } from "utils/api";

import { IPosts } from "interfaces";

const Index = (props) => {
  console.log(props);
  return <div>Welcome to Nexit.js!</div>;
};

Index.getInitialProps = async () => {
  const props: AxiosResponse<IPosts> = await postApi.getListAllPost();
  return props.data;
};

export default Index;
