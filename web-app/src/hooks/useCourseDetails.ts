import { useQuery } from "@apollo/client";

// Entities
import {
  Query,
  QueryGetCourseDetailsArgs,
} from "../types/__generated__/graphql";

// Query
import { GET_COURSE_DETAILS } from "../constants/graphql/queries/getCourseDetails";

export const useCourseDetails = ({ courseHash }: QueryGetCourseDetailsArgs) => {
  const { data, loading } = useQuery<Query, QueryGetCourseDetailsArgs>(
    GET_COURSE_DETAILS,
    {
      variables: {
        courseHash,
      },
    }
  );

  return {
    loading,
    data: data?.getCourseDetails.data,
  };
};
