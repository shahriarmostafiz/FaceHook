import React from 'react';
import SingleComment from './SingleComment';

const CommentLists = ({ comments }) => {
    return (
        <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
            {/* this post has {comments.length} comments */}
            {
                comments.length && comments.map(comment => <SingleComment key={comment?.id} comment={comment} />)
            }
        </div>
    );
};

export default CommentLists;