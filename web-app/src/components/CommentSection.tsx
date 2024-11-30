'use client'
import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <textarea
        className="border rounded-lg w-full p-2 mb-4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment"
      />
      <button
        className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
      <ul className="mt-4 space-y-4">
        {comments.map((c, idx) => (
          <li key={idx} className="border-b pb-2">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;