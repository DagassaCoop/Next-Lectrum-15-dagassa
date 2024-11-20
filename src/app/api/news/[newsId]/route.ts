import { news } from "@/src/mock";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ newsId: string }> }
) {
  const { newsId } = await params;
  const getNews = news.find((news) => news.id === newsId);

  if (!getNews) {
    return NextResponse.json({ message: "News not found" }, { status: 404 });
  }

  return NextResponse.json(getNews);
}
