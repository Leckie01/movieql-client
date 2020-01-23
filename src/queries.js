import { gql } from "apollo-boost";

export const HOME_PAGE = gql`
  query {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
      rating
    }
  }
`;
