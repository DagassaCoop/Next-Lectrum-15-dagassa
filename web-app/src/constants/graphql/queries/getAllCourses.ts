import { gql } from "@apollo/client";

export const GET_ALL_COURSES = gql`
  query GetAllCourses($page: Int!, $limit: Int!) {
    getAllCourses(page: $page, limit: $limit) {
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
