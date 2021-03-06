interface State {
  movies: Movie[],
}

interface Movie {
  id: string;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
  rating: string;
}

export { State, Movie };
