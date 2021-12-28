import React from "react";
import { getMovieDetailPagePath } from "utils";

import Link from "next/link";

import { Movie } from "types/movie";

interface Props {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

function MovieListItem({ movie, onClick }: Props) {
  const handleClickMovie = () => {
    onClick(movie);
  };

  return (
    <div className="movie" key={movie.id} onClick={handleClickMovie}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <Link
        key={movie.id}
        href={{
          pathname: getMovieDetailPagePath(movie),
          // query: {
          //   title: movie.original_title,
          // },
        }}
        // as={`/movies/${movie.id}`}
      >
        <a>
          <h4>{movie.original_title}</h4>
        </a>
      </Link>
      <style jsx>{`
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default React.memo(MovieListItem);
