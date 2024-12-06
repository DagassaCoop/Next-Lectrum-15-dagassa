"use server";

// Entities
import { Database } from "@/entities/supabase";

// DB
import { createClient } from "@/utils/supabase/server";

type Post = Database["public"]["Tables"]["posts"]["Insert"];

export async function addPost(post: Post) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("posts").insert(post);

  if (error) {
    throw new Error(`Failed to insert post: ${error.message}`);
  }

  return { post: data };
}
