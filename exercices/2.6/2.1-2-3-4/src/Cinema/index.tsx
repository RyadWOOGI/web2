import Movie from "../Movie";

interface CinemaProps {
    name: string;
    movies: {
      title: string;
      director: string;
      description: string;
    }[];
  }
  

const Cinema = ({ name, movies}: CinemaProps) => (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie) => (
          <Movie
            key={movie.title}
            title={movie.title} 
            director={movie.director} 
            description={movie.description}
            />
        ))}
      </ul>
    </div>
  );

  export default Cinema;