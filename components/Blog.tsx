import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import values from 'lodash/values';

import { Button, Header, Footer, FeaturedPost } from 'components';

import { IPosts } from 'interfaces';

const Blog: React.FC<{ posts: IPosts }> = ({ posts }) => {
    const router = useRouter();
    return (
        <>
            <Header title="Blog" />
            <Button onClick={() => router.push('/new')} name="Add post" />
            <StyledPostList>
                {values(posts).map((post) => (
                    <FeaturedPost key={post.id} post={post} />
                ))}
            </StyledPostList>

            <Footer title="Footer" />
        </>
    );
};

export default Blog;

const StyledPostList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
