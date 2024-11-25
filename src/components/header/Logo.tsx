import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <Link href={`/`} className="block w-[135px] h-[35px]">
    <Image
      width={10}
      height={10}
      src="/images/logo_title.svg"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </Link>
);

export default Logo;
