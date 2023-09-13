import React from "react";
import tomatoes from "../../public/assets/tomatoes.png";
import imdb from "../../public/assets/imdb.png";
import Favourite from "../../public/assets/Favorite.png";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const releaseYear = movie.release_date.split("-")[0];
  console.log(movie);
  return (
    <div className="max-w-[250px] relative">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
          alt=""
          className="absolute"
        />
        <div className="flex justify-end relative mb-[305px]">
          <img src={Favourite.src} alt="" className="p-4"/>
        </div>
      </div>
      <div>
        <p className="text-xs text-[#9CA3AF]">USA, {releaseYear}</p>
        <p className="mt-3 text-lg font-bold">{movie.title}</p>
        <div className="my-4 flex">
          <img src={imdb.src} alt="" />
          <p className="ml-2.5 mr-9 text-xs text-[#111827]">86.0/100</p>
          <img src={tomatoes.src} alt="" />
          <p className="ml-2.5 text-xs text-[#111827]">95%</p>
        </div>
        <p className="text-xs text-[#9CA3AF]">Action, Adventure / Horror</p>
      </div>
    </div>
  );
};

export default MovieCard;
