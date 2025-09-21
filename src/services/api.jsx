import { Suspense } from "react";
import MovieCard from "../Components/MovieCard";

const ShowMovie = () => {
  const API_KEY = "99fbe9c286dfff3640423951d8f9b246";
  const BASE_URL = "https://api.themoviedb.org/3";

  const GetMovieApiPromise = async () => {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.json();
  };
  const MoviePromise = GetMovieApiPromise();

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieCard MoviePromise={MoviePromise}></MovieCard>
      </Suspense>
    </>
  );
};

export default ShowMovie;
