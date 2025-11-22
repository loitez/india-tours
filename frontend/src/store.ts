import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.ts";
import loaderReducer from "./slices/loaderSlice.ts";
import rssReducer from "./slices/rssSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		loader: loaderReducer,
		rss: rssReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
