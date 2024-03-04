/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import LikeIcon from "../../../../assets/icons/like.svg"
import commentIcon from "../../../../assets/icons/comment.svg"
import shareIcon from "../../../../assets/icons/share.svg"
import useAxios from '../../../../hooks/useAxios';
import filledIcon from "../../../../assets/icons/like-filled.svg"
import useAuth from '../../../../hooks/useAuth';

const PostAction = ({ post }) => {
    const { api } = useAxios()
    const { auth } = useAuth()
    const likes = post?.likes
    const [liked, setLiked] = useState(likes.includes(auth?.user?.id))

    const commentLength = post?.comments?.length
    const postId = post?.id
    const handleLike = async () => {
        try {
            const res = await api.patch(`posts/${postId}/like`)
            if (res.status === 200) {
                setLiked(true)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            {/* Like Button */}
            <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
                onClick={handleLike}>
                <img src={liked ? filledIcon : LikeIcon} alt="Like" className='w-6' />
                <span>{!liked && "Like"}</span>
            </button>
            {/* Comment Button */}
            <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
                <img src={commentIcon} alt="Comment" />
                <span>Comment {commentLength ?? 0}</span>
            </button>
            {/* Share Button */}
            {/* Like Button */}
            <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
                <img src={shareIcon} alt="Share" />
                <span>Share</span>
            </button>
        </div>

    );
};

export default PostAction;