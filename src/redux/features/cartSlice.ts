import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieItem } from "../../../interfaces";
import toast from "react-hot-toast";

type CartState = {
    movieItems: MovieItem[];
};

const initialState: CartState = { movieItems: [] };

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<MovieItem>) => {
            // console.log("Adding movie", action.payload);
            // state.movieItems.push(action.payload);
            const exists = state.movieItems.some(
                (movieItem) => movieItem.movieId === action.payload.movieId
            );
            if (!exists) {
                // If the movie doesn't exist, add it to the array
                state.movieItems.push(action.payload);
                toast.success(`${action.payload.name} added to watchlist!`);
            }
        },
        removeMovie: (state, action: PayloadAction<{ movieId: string }>) => {
            state.movieItems = state.movieItems.filter(
                (movieItem) => movieItem.movieId !== action.payload.movieId
            );
        },
    },
});

export const { addMovie, removeMovie } = cartSlice.actions;
export default cartSlice.reducer;
