import { ReactNode } from "react";

const Layout = async ({ children, team, contact }: { children: ReactNode, team: React.ReactNode, contact: React.ReactNode }) => {

  return (
    <main className="container mx-auto px-6 min-h-screen">
      {children}
      <div className="grid grid-cols-2">
        {team}
        {contact}
      </div>
    </main>
  );
};

export default Layout;
