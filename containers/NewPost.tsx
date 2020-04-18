import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import postActions from 'store/posts/actions';

import { NewPost as NewPostBase } from 'components';

interface IProps {
    fetchCreatePost: Function;
}

const NewPost: React.FC<IProps> = ({ fetchCreatePost }) => {
    const router = useRouter();

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const titleOnChange = (event) => {
        setTitle(event.target.value);
    };

    const bodyOnChange = (event) => {
        setBody(event.target.value);
    };

    const onSubmit = () => {
        console.log('fasd');
        fetchCreatePost(title, body).then(() => {
            router.push('/');
        });
    };

    return (
        <NewPostBase
            titleValue={title}
            titleOnChange={titleOnChange}
            bodyValue={body}
            bodyOnChange={bodyOnChange}
            onSubmit={onSubmit}
        />
    );
};

const mapDispatchToProps = {
    fetchCreatePost: postActions.fetchCreatePost,
};

export default connect(null, mapDispatchToProps)(NewPost);
