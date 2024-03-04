import React from 'react';

const SingleComment = ({ comment }) => {
    const commentAvatarUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/${comment?.author?.avatar}`
    return (
        <div className="flex items-center gap-3 pt-4">
            <img
                className="max-w-6 max-h-6 rounded-full"
                src={commentAvatarUrl}
                alt="avatar"
            />
            <div>
                <div className="flex gap-1 text-xs lg:text-sm">
                    <span className='font-semibold'>{comment?.author?.name}: </span>
                    <span>{comment?.comment}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;