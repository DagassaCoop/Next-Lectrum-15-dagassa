import { gql } from "@apollo/client";

export const GET_COURSE_DETAILS = gql`
  query GetCourseDetails($courseHash: String!) {
    getCourseDetails(courseHash: $courseHash) {
      data {
        hash
        badge
        rating
        votes
        poster
        duration
        views
        description
        technologies
        createdBy
        price
        info {
          requirements
          descriptions
          benefits
          descriptionSummary
        }
        created
      }
    }
  }
`;
