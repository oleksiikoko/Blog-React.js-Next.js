import React from 'react';

import NewPost from 'containers/NewPost';
import { Header } from 'components';

const NewPostPage: React.FC = () => (
    <>
        <Header title="Blog" />
        <NewPost />
    </>
);

export default NewPostPage;
