import { createSlice } from "@reduxjs/toolkit";
import { getEpisodes, getLocation, getUsers } from "./thunk";

const initialState = {
  users: [],
  location: [],
  episodes: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getLocation.fulfilled]: (state, action) => {
      state.location = action.payload;
    },
    [getEpisodes.fulfilled]: (state, action) => {
      state.episodes = action.payload;
    },
  },
});
