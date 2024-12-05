import Link from "next/link";

// Components
import { PostsList } from "@/components/Posts/PostsList";

export default function BlogPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-20">
      <h1 className="font-semibold text-2xl mb-10">Blog</h1>
      <div className="w-full px-32 flex flex-col gap-4">
        <div className="w-full flex justify-end">
          <Link href="/blog/add">
            <button className=" bg-white text-black rounded-md px-3 py-1 font-bold">
              Add new Post
            </button>
          </Link>
        </div>
        <PostsList />
      </div>
    </div>
  );
}
