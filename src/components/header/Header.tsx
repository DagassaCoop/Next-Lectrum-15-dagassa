import Logo from "@/src/components/header/Logo";
import Navigation from "@/src/components/header/Navigation";
import AuthButtons from "@/src/components/header/AuthButtons";
import AdminLink from "@/src/components/header/AdminLink";

const Header = () => {
  return (
    <nav className="sticky z-[999] w-full py-[10px] h-[60px] bg-white flex items-center justify-between shadow-[0_0.05208in_11.25pt_-9px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between flex-row mx-[3vw] w-full">
        <Logo />
        <div className="flex items-center">
          <AdminLink />
          <Navigation />
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
};

export default Header;
