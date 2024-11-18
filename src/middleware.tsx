import { NextResponse } from "next/server";

const middleware = () => {
  const response = NextResponse.next();

  response.cookies.set("name", "Dmytro");

  return response;
};

export { middleware };
