import Link from 'next/link'

const LINKS: {
  title: string
  path: string
}[] = [
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Profile",
    path: "/profile"
  }
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className='flex items-center justify-between w-1/6 mx-auto'>
        {LINKS.map((l, index) => {
          return <Link href={l.path} key={index}>{l.title}</Link>
        })}
      </header>
        
    </div>
  );
}
