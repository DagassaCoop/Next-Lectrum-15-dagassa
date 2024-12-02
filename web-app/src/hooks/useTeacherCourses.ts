import { useQuery } from "@apollo/client";

// Entities
import {
  Query,
  QueryGetAllTeacherCoursesArgs,
} from "../types/__generated__/graphql";

// Query
import { GET_ALL_TEACHER_COURSES } from "../constants/graphql/queries/getAllTeacherCourses";

export const useTeacherCourses = ({
  page,
  limit,
}: QueryGetAllTeacherCoursesArgs) => {
  const { data, loading } = useQuery<Query, QueryGetAllTeacherCoursesArgs>(
    GET_ALL_TEACHER_COURSES,
    {
      variables: {
        page,
        limit,
      },
    }
  );

  return {
    loading,
    data: data?.getAllTeacherCourses.data,
  };
};
