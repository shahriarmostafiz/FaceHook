import React from "react";
import useProfile from "./useProfile";

const useAvatar = (post) => {
  const { state } = useProfile();
  const isMe = state?.user?.id === post?.author?.id;
  const avatar = isMe ? `${state?.user?.avatar}` : `${post?.author?.avatar}`;
  const avatarUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;
  return { avatarUrl };
};

export default useAvatar;
