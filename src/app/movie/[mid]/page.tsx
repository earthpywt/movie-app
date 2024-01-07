"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addMovie } from "@/redux/features/cartSlice";
import { MovieItem } from "../../../../interfaces";

export default function MovieDetailPage({
    params,
}: {
    params: { mid: string };
}) {
    const mockMovies = new Map();
    mockMovies.set("001", {
        name: "Parasite",
        director: "Bong Joon-ho",
        year: 2019,
        genre: new Set<string>(["comedy", "thriller", "drama"]),
        img: "/img/parasite.jpg",
    });
    mockMovies.set("002", {
        name: "Decision to Leave",
        director: "Park Chan-wook",
        year: 2022,
        genre: new Set<string>(["mystery", "romance", "thriller"]),
        img: "/img/decision-to-leave.jpg",
    });
    mockMovies.set("003", {
        name: "Logan",
        director: "James Mangold",
        year: 2018,
        genre: new Set<string>(["drama", "science fiction", "action"]),
        img: "/img/logan.jpg",
    });
    mockMovies.set("004", {
        name: "Past Lives",
        director: "Celine Song",
        year: 2023,
        genre: new Set<string>(["drama", "romance"]),
        img: "/img/past-lives.jpg",
    });

    const dispatch = useDispatch<AppDispatch>();
    const addToWatchlist = () => {
        const item: MovieItem = {
            movieId: params.mid,
            name: mockMovies.get(params.mid).name,
            director: mockMovies.get(params.mid).director,
            year: mockMovies.get(params.mid).year,
            genre: mockMovies.get(params.mid).genre,
        };
        dispatch(addMovie(item));
    };

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
                <Image
                    src={mockMovies.get(params.mid).img}
                    alt="Movie picture"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%] bg-black"
                />
            </div>
            <div className="text-md mx-5">
                {mockMovies.get(params.mid).name}
            </div>
            <div className="text-md mx-5">
                Directed by: {mockMovies.get(params.mid).director}
            </div>
            <div className="text-md mx-5">
                Year: {mockMovies.get(params.mid).year}
            </div>
            <div className="text-md mx-5">
                {/* {mockMovies.get(params.mid).genre} */}
                Genre:{" "}
                {(Array.from(mockMovies.get(params.mid).genre) as string[])
                    .map(
                        (genre) =>
                            genre.charAt(0).toUpperCase() + genre.slice(1)
                    )
                    .join(", ")}
            </div>
            <button
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            shadow-sm text-white"
                onClick={addToWatchlist}
            >
                Add to Watchlist
            </button>
        </main>
    );
}
