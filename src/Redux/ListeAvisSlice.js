import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  avis: "",
  error: "",
  loading: "false",
};

export const ShowListeAvis = createAsyncThunk(
  "ListeAvis/ShowListeAvis",
  async (body) => {
    let res = await AinstanceAxios.get("admin/avis", body);
    return await res.data;
  }
);

const FetchListeAvis = createSlice({
  name: "ListeAvis",
  initialState,

  extraReducers: {
    [ShowListeAvis.pending]: (state, action) => {
      state.loading = true;
    },

    [ShowListeAvis.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.avis = payload;
    },
    [ShowListeAvis.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { ShowAvis } = FetchListeAvis.actions;
export default FetchListeAvis.reducer;
