import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostAction from './PostAction';
import PostComments from './PostComments';

const PostCard = ({ post }) => {
    console.log(post);
    return (
        <article className="card mt-6 lg:mt-8">
            <PostHeader post={post} />
            <PostBody content={post?.content} poster={post?.image} />
            <PostAction post={post} />
            <PostComments post={post} />
        </article>
    );
};

export default PostCard;