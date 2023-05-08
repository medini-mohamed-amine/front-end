import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  company: "",
  errorcompany: "",
  loadingcompany: "false",
};

export const companyinformations = createAsyncThunk(
  "Company/companyinformations",
  async () => {
    let res = await AinstanceAxios.get("admin/societes");
    return await res.data;
  }
);

const companySlice = createSlice({
  name: "Company",
  initialState,
  extraReducers: {
    [companyinformations.pending]: (state, action) => {
      state.loading = true;
    },

    [companyinformations.fulfilled]: (state, { payload }) => {
      state.loadingcompany = false;
      state.company = payload;
      state.datacompany = "valid";
    },

    [companyinformations.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { showcompany } = companySlice.actions;

export default companySlice.reducer;
