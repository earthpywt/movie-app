import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "rootPersist",
    storage,
};

const rootReducer = combineReducers({ cartSlice });
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: reduxPersistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/REGISTER",
                ],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
