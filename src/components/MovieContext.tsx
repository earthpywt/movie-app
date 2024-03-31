// Create a new file called MovieContext.js
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "@/interfaces/movie";

interface MovieContextType {
    movies: Movie[]; // Replace 'any' with your Movie type if you have one defined
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>; // Same here for 'any'
}

const defaultValue: MovieContextType = {
    movies: [],
    setMovies: () => {},
};

const MovieContext = createContext<MovieContextType>(defaultValue);

export function useMovies() {
    return useContext(MovieContext);
}

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
};
