"use client";
import { useAppSelector } from "@/redux/store";

export default function Watchlist() {
    const movieItems = useAppSelector((state) => state.cartSlice.movieItems);
    console.log("Movie items in watchlist", movieItems);
    return (
        <>
            {movieItems.map((movieItem) => (
                <div
                    className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key={movieItem.movieId}
                >
                    <div className="text-xl">{movieItem.name}</div>
                </div>
            ))}
        </>
    );
}
