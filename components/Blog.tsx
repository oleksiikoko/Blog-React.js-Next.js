import React from "react";
import values from "lodash/values";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";

import { IPosts } from "interfaces";

const Blog: React.FC<{ posts: IPosts }> = ({ posts }) => (
  <>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header title="Blog" />
      <main>
        <Grid container spacing={4}>
          {values(posts).map((post) => (
            <FeaturedPost key={post.id} post={post} />
          ))}
        </Grid>
      </main>
    </Container>
    <Footer title="Footer" />
  </>
);

export default Blog;
