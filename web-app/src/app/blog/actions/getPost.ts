"use server";

// DB
import { createClient } from "@/utils/supabase/server";

export async function getPost(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("posts").select("*").eq("id", id);

  if (error) throw new Error(`Failed to get post: ${error.message}`);

  return { post: data[0] };
}
