import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  datasociete: "",
  errordatasociete: "",
  loadingdatasociete: "false",
};

export const adddatasociete = createAsyncThunk("Datasociete/adddatasociete", async (body) => {
  let res = await AinstanceAxios.post("authentification/registersociete", body);
  return await res;
});

const registerDataSociete = createSlice({
  name: "Datasociete",
  initialState,

  extraReducers: {
    [adddatasociete.pending]: (state, action) => {
      state.loading = true;
    },

    [adddatasociete.fulfilled]: (state, { payload }) => {
      state.loadingdatasociete = false;
      state.datasociete = payload;
    },
    [adddatasociete.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { enrollDataSociete } = registerDataSociete.actions;
export default registerDataSociete.reducer;
