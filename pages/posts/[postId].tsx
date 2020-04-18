import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import values from 'lodash/values';

import retrievePostActions from 'store/retrievePost/actions';
import postActions from 'store/posts/actions';
import { IRetrievePost } from 'interfaces';

import { Comment, Input, Body, Title, Button, UpdatePost, Header } from 'components';

interface IProps {
    post: IRetrievePost;
    fetchRetrievePosts: any;
    fetchUpdatePost: any;
    fetchDeletePost: any;
    fetchCreateComment: any;
}

const Posts: React.FC<IProps> = ({
    post,
    fetchRetrievePosts,
    fetchUpdatePost,
    fetchDeletePost,
    fetchCreateComment,
}) => {
    const router = useRouter();

    const [newComment, setNewComment] = useState<string>('');

    const postId: string | string[] = router.query.postId;

    if (!post || post.id !== Number(postId)) {
        fetchRetrievePosts(router.query.postId).then(() => {});
    }

    const updatePost = (postId, updateTitle, updateBody) => {
        fetchUpdatePost(postId, updateTitle, updateBody).then(() => {
            fetchRetrievePosts(router.query.postId);
        });
    };

    const deletePost = () => {
        fetchDeletePost(postId).then(() => {
            alert('Post deleted!');
            router.push('/');
        });
    };

    const changeComment = (event) => {
        setNewComment(event.target.value);
    };

    const addComment = () => {
        fetchCreateComment(postId, newComment);
    };

    return (
        <>
            <Header title="Blog" />
            {post && (
                <div className="post">
                    <Title text={post.title} />
                    <Body text={post.body} />
                    <UpdatePost post={post} sendUpdate={updatePost} sendDelete={deletePost} />
                    <div className="post__add-comment">
                        <label>Comment</label>
                        <Input value={newComment} onChange={changeComment} />
                        <Button onClick={addComment} name="Add comment" />
                    </div>
                    <div className="post__comments">
                        {values(post.comments).map((comment) => {
                            return <Comment key={comment.id} text={comment.body} />;
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = ({ retrievePostReducer }) => ({
    post: retrievePostReducer.post,
});
const mapDispatchToProps = {
    fetchRetrievePosts: retrievePostActions.fetchRetrievePosts,
    fetchUpdatePost: postActions.fetchUpdatePost,
    fetchDeletePost: postActions.fetchDeletePost,
    fetchCreateComment: retrievePostActions.fetchCreateComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
