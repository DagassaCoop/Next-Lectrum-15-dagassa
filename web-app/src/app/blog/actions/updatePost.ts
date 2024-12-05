// Entities
import { Database } from "@/entities/supabase";

// DB
import { createClient } from "@/utils/supabase/server";

type Post = Database["public"]["Tables"]["posts"]["Row"];

export async function updatePost(post: Post) {
  const supabase = await createClient();
  if (!post.id) {
    throw new Error("Todo ID is missing");
  }

  const { data, error } = await supabase
    .from("posts")
    .update(post)
    .eq("id", post.id);

  if (error) {
    throw new Error(`Failed to update post: ${error.message}`);
  }

  return { post: data };
}
