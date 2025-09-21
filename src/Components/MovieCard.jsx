import { use } from "react";

const MovieCard = ({ MoviePromise }) => {
  const data = use(MoviePromise);
  const movies = data.results;
  console.log(movies);

  return (
    <>
      <div className="border-2 border-amber-400 rounded-2xl p-10 m-5 text-left">
        {movies.map((data) => (
          <div key={data.id}>
            <img src={data.url} alt="" />
            <h1 className="border-2 border-amber-400 rounded-2xl p-10 m-5">
              {data.title}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
