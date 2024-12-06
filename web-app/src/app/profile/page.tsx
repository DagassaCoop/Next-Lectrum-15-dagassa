import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const sessionInfo = await supabase.auth.getSession();

  if (sessionInfo.error) return <span>{sessionInfo.error.message}</span>;

  const user = sessionInfo.data.session?.user;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-20">
      <h1 className="text-center font-semibold text-2xl mb-10">User Info</h1>
      <div className="flex flex-col">
        <span>
          <b>User ID:</b> {user?.id}
        </span>
        <span>
          <b>User Email:</b> {user?.email}
        </span>
        <span>
          <b>User Created At:</b> {user?.created_at}
        </span>
      </div>
    </div>
  );
}
