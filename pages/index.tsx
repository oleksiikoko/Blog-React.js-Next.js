import React from "react";
import { connect } from "react-redux";
import postsActions from "store/posts/actions";

import Blog from "components/Blog";
import { IPosts } from "interfaces";

interface IProps {
  posts: IPosts;
  fetchPosts: Function;
}

const Index: React.FC<IProps> = ({ posts, fetchPosts }) => {
  if (posts === null) {
    fetchPosts();
  }
  return <Blog posts={posts} />;
};

const mapStateToProps = ({ postReducer }) => ({
  posts: postReducer.posts,
});
const mapDispatchToProps = postsActions;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
