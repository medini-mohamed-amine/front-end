import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "../instance";

let initialState = {
  Home: "",
  error: "",
  loading: "false",
};

export const ResultatComparison = createAsyncThunk(
  "TwoCompanies/ResultatComparison",
  async (body) => {
    let res = await AinstanceAxios.get("admin/societes", body);
    return await res.data;
  }
);

const HomeCompany = createSlice({
  name: "TwoCompanies",
  initialState,

  extraReducers: {
    [ResultatComparison.pending]: (state, action) => {
      state.loading = true;
    },

    [ResultatComparison.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Home = payload;
    },
    [ResultatComparison.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { ShowHome } = HomeCompany.actions;
export default HomeCompany.reducer;
