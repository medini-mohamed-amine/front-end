import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  GetAvis: "",
  error: "",
  loading: "false",
};

export const getAvisClients = createAsyncThunk(
  "Avis/getAvisClients",
  async () => {
    let res = await AinstanceAxios.get("admin/clientsavis");
    return await res.data;
  }
);

const AvisSlice = createSlice({
  name: "Avis",
  initialState,
  extraReducers: {
    [getAvisClients.pending]: (state, action) => {
      state.loading = true;
    },

    [getAvisClients.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.GetAvis = payload;
    },

    [getAvisClients.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { showAvisClients } = AvisSlice.actions;

export default AvisSlice.reducer;
