import { createSlice } from "@reduxjs/toolkit";
import { getRssFeed } from "../api/getRssFeed.ts";

const rssSlice = createSlice({
	name: "rss",
	initialState: {
		feed: null,
		status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getRssFeed.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getRssFeed.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.feed = action.payload;
			})
			.addCase(getRssFeed.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default rssSlice.reducer;
