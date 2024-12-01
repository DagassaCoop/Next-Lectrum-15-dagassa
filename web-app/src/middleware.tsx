import { NextResponse } from "next/server";

const middleware = () => {
  const response = NextResponse.next();

  response.cookies.set("name", "Anton");

  return response;
};

export { middleware };
