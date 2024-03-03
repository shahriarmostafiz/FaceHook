import React from 'react';
import PostCard from './PostCard/PostCard';

const PostList = ({ posts }) => {
    console.log("allposts", posts);
    return (
        <>
            {
                posts.length && posts.map(post => <PostCard post={post} key={post?.id} />)
            }
        </>

    );
};

export default PostList;