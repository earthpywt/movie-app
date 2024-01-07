import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieItem } from "../../../interfaces";

type CartState = {
    movieItems: MovieItem[];
};

const initialState: CartState = { movieItems: [] };

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<MovieItem>) => {
            state.movieItems.push(action.payload);
        },
        removeMovie: (state, action: PayloadAction<MovieItem>) => {
            const remainItems = state.movieItems.filter((obj) => {
                return (
                    obj.name !== action.payload.name ||
                    obj.director !== action.payload.director ||
                    obj.year !== action.payload.year
                );
            });
            state.movieItems = remainItems;
        },
    },
});

export const { addMovie, removeMovie } = cartSlice.actions;
export default cartSlice.reducer;
