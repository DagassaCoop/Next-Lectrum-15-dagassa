// Components
import Post from "@/components/Posts/Post";

// Entities
import { Database } from "@/entities/supabase";
type Post = Database["public"]["Tables"]["posts"]["Insert"];

export default async function AddPostPage() {
  const post: Post = {
    author: "",
    text: "",
    title: "",
    description: "",
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-20 px-10">
      <Post post={post} isEditing />
    </div>
  );
}
