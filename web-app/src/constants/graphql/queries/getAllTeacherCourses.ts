import { gql } from "@apollo/client";

export const GET_ALL_TEACHER_COURSES = gql`
  query GetAllTeacherCourses($page: Int!, $limit: Int!) {
    getAllTeacherCourses(page: $page, limit: $limit) {
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
      meta {
        totalDocs
        limit
        page
        totalPages
        nextPage
        prevPage
        pagingCounter
        hasPrevPage
        hasNextPage
      }
    }
  }
`;
