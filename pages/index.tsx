import axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { getMovieDetailPagePath } from "utils";

import { useRouter } from "next/router";

import MovieList from "components/Movie/MovieList";
import Seo from "components/Seo";

import { Movie as MovieType } from "types/movie";

interface Props {
  movies: Array<MovieType>;
}

const Home = ({ movies }: Props) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleClickMovie = useCallback(
    (movie: MovieType) => {
      router.push(
        {
          pathname: getMovieDetailPagePath(movie.id),
          query: {
            title: movie.original_title,
          },
        },
        `/movies/${movie.id}`,
      );
    },
    [router],
  );

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ position: "fixed", top: 0, left: 0 }}
      />
      <main className="container">
        <Seo title="Home" />
        <MovieList movies={movies} onClickMovie={handleClickMovie} />
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
            gap: 20px;
            justify-items: center;
          }
        `}</style>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  // running on the server!
  const response = await axios.get<any, AxiosResponse<{ results: Array<MovieType> }>>(
    "http://localhost:3000/api/movies",
  );
  const movies = response.data.results;
  return {
    props: {
      movies,
    },
  };
}

export default Home;
