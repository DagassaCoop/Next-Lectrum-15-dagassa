"use server";

// DB
import { createClient } from "@/utils/supabase/server";

export async function deletePost(id: string) {
  // const id = formData.get("id")?.toString();
  // if (!id) {
  //   console.warn("Post ID is missing.");
  //   return;
  // }
  const supabase = await createClient();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete post: ${error.message}`);
  }
}
