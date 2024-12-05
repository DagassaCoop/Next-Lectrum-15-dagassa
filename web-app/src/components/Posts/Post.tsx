"use client";
import { MouseEvent, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// Actions
import { deletePost } from "@/app/blog/actions/deletePost";
import { addPost } from "@/app/blog/actions/addPost";
import { updatePost } from "@/app/blog/actions/updatePost";

// Entities
import { Database } from "@/entities/supabase";
type Post = Database["public"]["Tables"]["posts"]["Row"];
type PostInsert = Database["public"]["Tables"]["posts"]["Insert"];

interface IPostProps {
  post: Post | PostInsert;
  isEditing: boolean;
}

export default function Post({
  post: postProp,
  isEditing: isEditingProp,
}: IPostProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isAdding = pathname.split("/").includes("add");
  const [post, setPost] = useState(postProp);
  const [isEditing, setIsEditing] = useState(isEditingProp);

  const onDelete = async () => {
    await deletePost(post.id!);
    router.push("/blog");
  };

  const onSave = async (e: MouseEvent) => {
    e.preventDefault();
    await addPost(post);
    router.push("/blog");
  };

  const onUpdate = async (e: MouseEvent) => {
    e.preventDefault();

    await updatePost(post as Post);
    router.push("/blog");
  };

  const onCancel = (e: MouseEvent) => {
    e.preventDefault();

    if (isAdding) router.push("/blog");

    setIsEditing(false);
    setPost(postProp);
  };

  return (
    <form action="#" className="relative w-full">
      <div
        className={[
          "absolute right-0 top-0 w-fit h-fit z-10 flex justify-between items-center gap-3",
          isAdding ? "hidden" : "",
        ].join(" ")}
      >
        <button
          className="text-sm font-semibold text-white bg-red-500 rounded-md px-3 py-1"
          formAction={onDelete}
        >
          Delete
        </button>
        <button
          className="text-sm font-semibold text-white bg-yellow-500 rounded-md px-3 py-1 disabled:bg-gray-300"
          disabled={isEditing}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
      <div className="mb-10 relative">
        {isEditing ? (
          <>
            <label
              htmlFor="title"
              className="block text-md/6 font-medium text-white"
            >
              Post title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                id="title"
                required
                placeholder="Enter title"
                onChange={(e) =>
                  setPost((prev) => ({ ...prev, title: e.target.value }))
                }
                value={post.title}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </>
        ) : (
          <h1 className="text-2xl font-semibold text-center">{post.title}</h1>
        )}
      </div>
      <div className="mb-6">
        {isEditing ? (
          <>
            <label
              htmlFor="description"
              className="block text-md/6 font-medium text-white"
            >
              Post description
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="description"
                id="description"
                required
                placeholder="Enter description"
                onChange={(e) =>
                  setPost((prev) => ({ ...prev, description: e.target.value }))
                }
                value={post.description ?? ""}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </>
        ) : (
          <p>{post.description}</p>
        )}
      </div>

      <div className="mb-10">
        {isEditing ? (
          <>
            <label
              htmlFor="text"
              className="block text-md/6 font-medium text-white"
            >
              Post text
            </label>
            <div className="mt-2">
              <textarea
                name="text"
                id="text"
                required
                placeholder="Enter text"
                onChange={(e) =>
                  setPost((prev) => ({ ...prev, text: e.target.value }))
                }
                value={post.text}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </>
        ) : (
          <p>{post.text}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        {isEditing ? (
          <>
            <label
              htmlFor="author"
              className="block text-md/6 font-medium text-white"
            >
              Post author
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="author"
                id="author"
                required
                placeholder="Enter author"
                onChange={(e) =>
                  setPost((prev) => ({ ...prev, author: e.target.value }))
                }
                value={post.author}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </>
        ) : (
          <p>Author: {post.author}</p>
        )}

        {!isAdding && (
          <p>Posted: {new Date(post.posted_at!).toLocaleDateString()}</p>
        )}
      </div>

      {isEditing && (
        <div className="w-full flex justify-end gap-4 mt-10">
          <button
            onClick={onCancel}
            className="text-sm font-semibold text-white bg-red-500 rounded-md px-5 py-3"
          >
            Cancel
          </button>
          <button
            onClick={isAdding ? onSave : onUpdate}
            className="text-sm font-semibold text-white bg-green-500 rounded-md px-5 py-3"
          >
            {isAdding ? "Add" : "Update"}
          </button>
        </div>
      )}
    </form>
  );
}
