import { ReactNode } from "react";

const Layout = async ({ children, team }: { children: ReactNode, team: React.ReactNode }) => {
    return (
        <main className="container min-h-screen mx-auto px-6">
            {children}
            <div className="grid grid-cols-2">
                {team}
            </div>
        </main>
    );
};

export default Layout;