import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieCard from "../MovieCard";

const MoviePage = () => {
  const { movies }: MovieContext = useOutletContext();

  const match = useMatch("/movie/:id");
  const movieId = Number(match?.params.id);
  if (isNaN(movieId)) {
    {
      return <h1>Movie not found</h1>;
    }
  }
  const movieFound = movies.find((movie) => movie.id === movieId);

  if (!movieFound) {
    return <h1>Movie not found</h1>;
  }

  return <MovieCard movie={movieFound} />;
};

export default MoviePage;
