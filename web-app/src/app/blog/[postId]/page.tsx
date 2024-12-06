// Actions
import { getPost } from "../actions/getPost";

// Components
import Post from "@/components/Posts/Post";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;

  const { post } = await getPost(postId);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-20 px-10">
      <Post post={post} isEditing={false} />
    </div>
  );
}
