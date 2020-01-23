import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, error, data }) => {
      const { movies } = data;
      if (loading) return <p>Loading...</p>;
      return (
        <ul>
          {movies.map((movie, idx) => (
            <li key={idx}>{movie.title}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default Home;
