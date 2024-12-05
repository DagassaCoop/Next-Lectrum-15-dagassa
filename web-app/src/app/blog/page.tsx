// Components

import { PostsList } from "@/components/PostsList";

export default function BlogPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-20">
      <h1 className="font-semibold text-2xl mb-10">Blog</h1>
      <div className="w-full px-32">
        <PostsList />
      </div>
    </div>
  );
}
