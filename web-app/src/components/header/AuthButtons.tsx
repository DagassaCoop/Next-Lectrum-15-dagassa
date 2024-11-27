"use client";

import { useState } from "react";

const AuthButtons = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    document.cookie = `access-tokens=valid-token; path=/;`;
    setIsAuthenticated(true);
  };

  const logout = () => {
    document.cookie = `access-tokens=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setIsAuthenticated(false);
  };
  return (
    <>
      {isAuthenticated ? (
        <button
          onClick={logout}
          className="whitespace-nowrap text-sm font-roboto text-[#686f7a] leading-[26px] no-underline flex-shrink-0 ml-[10px] hover:text-black"
        >
          Log out
        </button>
      ) : (
        <button
          onClick={login}
          className="whitespace-nowrap text-sm font-roboto text-[#686f7a] leading-[26px] no-underline flex-shrink-0 ml-[10px] hover:text-black"
        >
          Sign in
        </button>
      )}
    </>
  );
};

export default AuthButtons;
