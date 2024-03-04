/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useAvatar from '../../../../hooks/useAvatar';
import CommentLists from './CommentLists';
import useAuth from '../../../../hooks/useAuth';
import useAxios from '../../../../hooks/useAxios';

const PostComments = ({ post }) => {
    // const { avatarUrl } = useAvatar(post)

    const { auth } = useAuth()
    const avatarUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`;
    const { api } = useAxios()
    const [showComments, setShowComments] = useState(true)

    const [comments, setComments] = useState(post?.comments)
    const [comment, setComment] = useState("")
    const hadlePostComment = async (e) => {
        const key = e.keyCode
        if (key === 13) {
            try {
                const res = await api.patch(`posts/${post?.id}/comment`, { comment })
                if (res.status === 200) {
                    setComments([...res.data.comments])
                    setComment("")
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div>
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={avatarUrl}
                    alt="avatar"
                />
                <div className="flex-1">
                    <input
                        type="text"
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        onKeyDown={e => hadlePostComment(e)}
                    />
                </div>
            </div>
            {/* comment filter button */}
            <div className="mt-4">
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="text-gray-300 max-md:text-sm">All Comment ({post?.comments.length}) ▾</button>
            </div>
            {showComments && <CommentLists comments={comments} />}
        </div>

    );
};

export default PostComments;