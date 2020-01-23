import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, error, data }) => {
      const { movies } = data;
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error!</p>;
      return (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <h2>
                {movie.title} / {movie.rating}
              </h2>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default Home;
