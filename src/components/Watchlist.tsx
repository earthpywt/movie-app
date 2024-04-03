"use client";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeMovie } from "@/redux/features/cartSlice";

export default function Watchlist() {
    const movieItems = useAppSelector((state) => state.cart.movieItems);
    const dispatch = useDispatch();

    const handleRemoveMovie = (movieId: string) => {
        dispatch(removeMovie({ movieId }));
    };
    return (
        <>
            {movieItems.map((movieItem) => (
                <div
                    className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key={movieItem.movieId}
                >
                    <div className="text-xl">{movieItem.name}</div>
                    <button
                        onClick={() => handleRemoveMovie(movieItem.movieId)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </>
    );
}
