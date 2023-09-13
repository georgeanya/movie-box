'use client'
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const FeaturedMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const apiKey = "e4a0913b9cea07dd301ff5e27794f7b2";
    const apiUrl = "https://api.themoviedb.org/3/movie/popular";
    const params = new URLSearchParams({
      api_key: apiKey,
      language: "en-US",
      page: "1", // Changed to a string since URLSearchParams values are strings
    });

    const fetchMovies = async () => {
      try {
        const response = await fetch(`${apiUrl}?${params}`);
        const data = await response.json();
        if (data.results.length > 0) {
          const moviesData: Movie[] = data.results.slice(0, 12);
          setMovies(moviesData);
        }
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="mt-[150px] px-[95px] w-full bg-white z-10">
      <div className="">
        <div className="flex justify-between mt-[70px] mb-[44px] items-center ">
          <p className="font-bold text-4xl">Featured Movie</p>
          <p className="font-normal text-lg text-[#BE123C]">See more</p>
        </div>
      </div>
      <div className="grid grid-rows-1 gap-y-[103px] gap-[80px] grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
