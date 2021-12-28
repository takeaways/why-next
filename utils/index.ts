import { Movie } from "types/movie";

type PathMovieTitle = string;
type PathMovieId = string;

export const getMovieDetailPagePath = ({
  title,
  id,
}: Movie): `/movies/${PathMovieTitle}/${PathMovieId}` => `/movies/${title}/${id}`;
