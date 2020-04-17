import React from "react";
import { connect } from "react-redux";
import postsActions from "store/posts/actions";

import Blog from "components/Blog";

// import { IPosts } from "interfaces";

const Index = ({ posts, fetchPosts }) => {
  if (posts === null) {
    fetchPosts();
  }
  // const { posts, fetchPosts } = props;
  // fetchPosts();
  // console.log(posts);

  // postApi.createPost("Privet ", "Maks)");
  // postApi.updatePost(13, "Kak ", "Dela?");
  return <Blog posts={posts} />;
};

// Index.getInitialProps = async ({ fetchPosts }) => {
// const props: AxiosResponse<IPosts> = await postApi.getListAllPost();
// return props.data;
// dispatch
// console.log(";lasdfkjfasd;");
// postsActions.fetchPosts();
// return {};
// fetchPosts();
// };

const mapStateToProps = ({ postReducer }) => ({
  posts: postReducer.posts,
});
const mapDispatchToProps = postsActions;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
