interface Movie {
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
};

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (movie: Movie) => void;
};

export type { Movie, MovieContext };
