import { create } from "zustand";

// Entities
import { Database } from "@/entities/supabase";
type Post = Database["public"]["Tables"]["posts"]["Row"];

interface IPostsStoreProps {
  posts: Post[];
  setPosts: (posts: Post[]) => Promise<void>;
  getPost: (id: string) => Promise<Post | undefined>;
}

export const usePostsStore = create<IPostsStoreProps>((set, get) => ({
  posts: [],
  setPosts: async (posts) => {
    set(() => ({
      posts,
    }));
  },
  getPost: async (id) => {
    const posts = get().posts;
    return posts.find((item) => item.id === id);
  },
}));
