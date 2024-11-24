interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
};

type NewMovie = Omit<Movie, "id">;

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (movie: Movie) => void;
};

export type { Movie, NewMovie, MovieContext };
