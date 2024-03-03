import React from 'react';
import useProfile from '../../hooks/useProfile';

const ProfilePosts = () => {
    const { state, dispatch } = useProfile()
    const posts = state.posts
    return (
        <div>
            <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>

        </div>
    );
};

export default ProfilePosts;