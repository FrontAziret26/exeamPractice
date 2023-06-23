import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = "https://rickandmortyapi.com/api";

export const getUsers = createAsyncThunk(
  "users/users",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/character`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getLocation = createAsyncThunk(
    "users/location",
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch(`${URL}/location`);
        const data = await response.json();
        return data.results;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const getEpisodes = createAsyncThunk(
    "users/episodes",
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch(`${URL}/episode`);
        const data = await response.json();
        return data.results;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );