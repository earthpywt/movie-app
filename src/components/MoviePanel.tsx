"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Convert, Movie } from "@/interfaces/movie";
import { useMovies } from "./MovieContext";

export default function MoviePanel() {
    //const [movies, setMovies] = useState<Movie[]>([]);
    const { movies, setMovies } = useMovies();

    useEffect(() => {
        const fetchMovies = async () => {
            const movieIds = [
                "tt3315342",
                "tt13238346",
                "tt6751668",
                "tt12477480",
            ]; // Example IMDb IDs
            const apiKey = "255102ad"; // Replace with your OMDb API key
            const requests = movieIds.map((id) =>
                fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`).then(
                    (response) => response.json()
                )
            );

            const responses = await Promise.all(requests);

            // Convert each JSON response to the Movie interface
            // const movies: Movie[] = responses.map((response) =>
            //     Convert.toMovie(JSON.stringify(response))
            // );

            // setMovies(movies);
            const moviesToUpdate = responses.map((response) =>
                Convert.toMovie(JSON.stringify(response))
            );

            setMovies(moviesToUpdate);
        };

        if (movies.length === 0) {
            fetchMovies().catch(console.error);
        }
    }, [movies, setMovies]);
    //console.log(movies);

    return (
        <div>
            <div
                style={{
                    margin: "20px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignContent: "space-around",
                }}
            >
                {movies.map((movieItem) => (
                    <Link
                        key={movieItem.imdbID}
                        href={`/movie/${movieItem.imdbID}`}
                        className="w-1/5"
                    >
                        <ProductCard
                            name={movieItem.Title}
                            img={movieItem.Poster}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
