"use client";
import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <button
      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
      onClick={handleLike}
    >
      👍 {likes} Likes
    </button>
  );
};

export default LikeButton;
