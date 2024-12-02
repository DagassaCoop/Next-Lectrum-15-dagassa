import { useQuery } from "@apollo/client";

// Query
import { GET_ALL_COURSES } from "../../constants/graphql/queries/getAllCourses";

// Entities
import {
  QueryGetAllCoursesArgs,
  Query,
} from "@/src/types/__generated__/graphql";

export const useCourses = ({
  page = 0,
  limit = 10,
}: Partial<QueryGetAllCoursesArgs>) => {
  const { data, loading } = useQuery<Query, QueryGetAllCoursesArgs>(
    GET_ALL_COURSES,
    {
      variables: {
        page,
        limit,
      },
    }
  );

  return { loading: loading, data: data?.getAllCourses.data };
};
