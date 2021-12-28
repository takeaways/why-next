import { memo } from "react";

import { Movie } from "types/movie";

import MovieListItem from "./MovieListItem";

interface Props {
  movies: Array<Movie>;
  onClickMovie: (movie: Movie) => void;
}
const MovieList = ({ movies, onClickMovie }: Props) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} onClick={onClickMovie} />
      ))}
    </>
  );
};

export default memo(MovieList);
