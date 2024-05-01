import { getMovieDetails } from "@/lib/getMovies";
import { Movie } from "@/typings";
import React from "react";

async function MovieDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie: Movie = await getMovieDetails(id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8 mt-16 md:mt-24">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="w-full max-w-[370px] mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold mt-6">{movie.title}</h1>
              <p className="text-gray-500 mb-2">
                Release Date: {movie.release_date}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Genres:</span>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Duration:</span>
                {` ${Math.floor(movie.runtime / 60)}h  ${movie.runtime % 60}m`}
              </p>
              <p className="mb-4">{movie.overview}</p>
              <p className="text-gray-500">
                Rating: {Math.round(movie.vote_average * 10) / 10}/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
