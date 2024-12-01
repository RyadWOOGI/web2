import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleList";
import PageTitle from "../PageTitle";

const HomePage = () => {
  const { movies }: MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
      <MovieTitleList movies={movies} />
    </div>
  );
};
export default HomePage;