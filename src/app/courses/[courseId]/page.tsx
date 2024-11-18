// Components
import CourseDetail from "@/components/CourseDetail";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const id = (await params).courseId;

  return <CourseDetail courseId={id} />;
}
