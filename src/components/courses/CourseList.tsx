"use client";

import { CourseType } from "@/src/types";
import CourseCard from "./CourseCard";
import { useState } from "react";

export const revalidate = 10;

const CourseList = ({ courses }: { courses: CourseType[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses?.filter((course) =>
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        {filteredCourses?.map((course) => (
          <CourseCard key={course.hash} course={course} />
        ))}
        <p className="text-sm text-gray-500 mt-8 text-center">
          Page updated every 60 seconds. Last update:{" "}
          {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default CourseList;
