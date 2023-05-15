import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  listesociete: "",
  error: "",
  loading: "false",
};

export const ShowListeSocietes = createAsyncThunk(
  "ListeSocietes/ShowListeSocietes",
  async (body) => {
    let res = await AinstanceAxios.get("admin/societes", body);
    return await res.data;
  }
);

const FetchListeSocietes = createSlice({
  name: "ListeSocietes",
  initialState,

  extraReducers: {
    [ShowListeSocietes.pending]: (state, action) => {
      state.loading = true;
    },

    [ShowListeSocietes.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.listesociete = payload;
    },
    [ShowListeSocietes.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { ShowSocietes } = FetchListeSocietes.actions;
export default FetchListeSocietes.reducer;
