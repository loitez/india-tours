import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "../slices/loaderSlice.ts";
import { useDispatch } from "react-redux";

const FEED_URL = "http://localhost:5000/api/rss";

export const getRssFeed = createAsyncThunk("blog/fetchRssFeed", async () => {
  const dispatch = useDispatch();
  dispatch(showLoader());
  try {
    const response = await fetch(FEED_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    return response.json();
  } finally {
    dispatch(hideLoader());
  }
});
