import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  societe: "",
  errorsociete: "",
  loadingsociete: "false",
};

export const addsociete = createAsyncThunk(
  "Societe/addsociete",
  async (body) => {
    let res = await AinstanceAxios.post(
      "authentification/registersociete",
      body
    );
    return await res;
  }
);

const registerSociete = createSlice({
  name: "Societe",
  initialState,

  extraReducers: {
    [addsociete.pending]: (state, action) => {
      state.loading = true;
    },

    [addsociete.fulfilled]: (state, { payload }) => {
      state.loadingsociete = false;
      state.client = payload;
    },
    [addsociete.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid email or password";
    },
  },
});

export const { signupsociete } = registerSociete.actions;
export default registerSociete.reducer;
