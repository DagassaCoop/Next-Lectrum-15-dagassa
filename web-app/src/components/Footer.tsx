import Image from "next/image";

const Footer = async () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 w-full pt-16 pb-12">
      <div className="flex flex-col justify-center items-start mx-[3vw] h-auto">
        <p className="border-t border-gray-700 pt-5 text-sm text-white text-left flex items-center leading-[26px]">
          <Image
            className="mr-[10px] w-[25px]"
            src="/images/logo.png"
            width={25}
            height={25}
            alt="Lectrum"
          />
          © {fullYear}
          <strong className="ml-[2px]">Lectrum LLC</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
