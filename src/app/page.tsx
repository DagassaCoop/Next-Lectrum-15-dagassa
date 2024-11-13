import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const isUserGuest = cookieStore.get("isUserGuest");

  console.log(isUserGuest);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        {isUserGuest?.value !== "false" ? (
          <h1>Ласкаво просимо!</h1>
        ) : (
          <h1>Привіт, раді бачити тебе знову!</h1>
        )}
      </main>
    </div>
  );
}
