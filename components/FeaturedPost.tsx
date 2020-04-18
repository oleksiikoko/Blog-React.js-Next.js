import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { IPost } from 'interfaces';

interface IProps {
    post: IPost;
}

const FeaturedPost: React.FC<IProps> = ({ post }) => {
    const router = useRouter();
    return (
        <StyledPost onClick={() => router.push(`/posts/${post.id}`)}>
            <StyledTitle>{post.title}</StyledTitle>
            <StyledBody>{post.body}</StyledBody>
        </StyledPost>
    );
};

export default FeaturedPost;

const StyledPost = styled.div`
    height: 130px;
    width: 60%;
    border: 2px solid black;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 14px;
    color: black;
    margin: 20px;
    cursor: pointer;
`;

const StyledTitle = styled.p`
    text-align: center;
    height: 30px;
    padding: 0 10px;
    font-size: 20px;
    color: black;
`;

const StyledBody = styled.p`
    font-size: 14px;
    margin: 20px;
`;
