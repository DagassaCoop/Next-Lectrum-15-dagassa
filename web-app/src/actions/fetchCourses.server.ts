// Lib
import { getClient } from "@/src/lib/client";

// Query
import { GET_ALL_COURSES } from "@/src/constants/graphql/queries/getAllCourses";

//Entities
import {
  Query,
  QueryGetAllCoursesArgs,
} from "@/src/types/__generated__/graphql";

// Not working, get empty data array
export const fetchCourses = async ({
  page = 0,
  limit = 10,
}: QueryGetAllCoursesArgs) => {
  const graphqlClient = getClient();
  const { data, loading } = await graphqlClient.query<
    Query,
    QueryGetAllCoursesArgs
  >({
    query: GET_ALL_COURSES,
    variables: {
      page,
      limit,
    },
  });

  return {
    loading,
    data: data?.getAllCourses.data,
  };
};
