// DB
import { createClient } from "@/utils/supabase/server";

export async function getPosts() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }

  return { posts: data };
}
