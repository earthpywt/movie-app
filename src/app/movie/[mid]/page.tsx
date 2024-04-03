"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMovies } from "@/components/MovieContext"; // Adjust the import path as needed
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addMovie } from "@/redux/features/cartSlice";

export default function MovieDetailPage() {
    const params = useParams();
    const { movies } = useMovies();

    // Find the specific movie by IMDb ID
    const movie = movies.find((movie) => movie.imdbID === params.mid);

    const dispatch = useDispatch<AppDispatch>();
    const addToWatchlist = () => {
        if (!movie) return; // Guard clause in case movie is not found
        const yearAsNumber = parseInt(movie.Year, 10) || 0;
        // Dispatch the action with the movie details
        dispatch(
            addMovie({
                movieId: movie.imdbID,
                name: movie.Title,
                director: movie.Director, // Adjust these fields based on your actual movie object structure
                year: yearAsNumber,
                genre: movie.Genre ? movie.Genre.split(", ") : [],
            })
        );
    };

    if (!movie) {
        return <div>Movie not found</div>; // Render something if the movie isn't found
    }

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image
                    src={movie.Poster}
                    alt={movie.Title}
                    width={300} // Adjust the size as necessary
                    height={450}
                    sizes="100vw"
                    className="rounded-lg"
                />
            </div>
            <div className="text-md mx-5">{movie.Title}</div>
            <div className="text-md mx-5">Directed by: {movie.Director}</div>
            <div className="text-md mx-5">Year: {movie.Year}</div>
            <div className="text-md mx-5">Genre: {movie.Genre}</div>
            <button
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                onClick={addToWatchlist}
            >
                Add to Watchlist
            </button>
        </main>
    );
}
