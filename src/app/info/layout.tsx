import { ReactNode } from "react";

const Layout = async ({
  children,
  team,
  contact,
}: {
  children: ReactNode;
  team: React.ReactNode;
  contact: React.ReactNode;
}) => {
  return (
    <main className="container min-h-screen mx-auto px-6">
      {children}
      <div className="grid grid-cols-2">
        {team}
        {contact}
      </div>
    </main>
  );
};

export default Layout;
