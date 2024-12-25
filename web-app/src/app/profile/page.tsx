"use client";
// Core
import { useEffect } from "react";

// Hooks
import { useAuthStore } from "@/store/authStore";
// DB
import { createClient } from "@/utils/supabase/client";

export default function ProfilePage() {
  const supabase = createClient();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await supabase.auth.getSession();
      if (session.data.session?.user)
        await useAuthStore.getState().setUser(session.data.session?.user);
    };
    fetchSession();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-20">
      <h1 className="text-center font-semibold text-2xl mb-10">User Info</h1>
      <div className="flex flex-col">
        <span>
          <b>User from store ID:</b> {user?.id}
        </span>
        <span>
          <b>User from store Email:</b> {user?.email}
        </span>
        <span>
          <b>User from store Created At:</b> {user?.created_at}
        </span>
      </div>
    </div>
  );
}
