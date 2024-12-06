import Link from "next/link";

// Actions
import { getPosts } from "@/app/blog/actions/getPosts";

export async function PostsList() {
  const { posts } = await getPosts();

  return (
    <div className="flex flex-col gap-6 p-8 border-2 border-grey-500 rounded-lg w-full">
      {posts?.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col border rounded-md w-full text-white p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-semibold">{item.title}</span>
              <div className="flex justify-between items-center gap-1">
                <span className="text-sm text-gray-500">{item.author} |</span>
                <span className="text-sm text-gray-500">
                  {new Date(item.posted_at).toLocaleDateString()}
                </span>
              </div>
            </div>
            {item.description && <p>{item.description}</p>}
            <Link href={"/blog/" + item.id} className="mt-5">
              <button className="bg-white text-black rounded-md px-3 py-1 font-bold">
                read more
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
