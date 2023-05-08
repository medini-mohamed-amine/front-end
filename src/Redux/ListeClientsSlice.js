import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  listeclient: "",
  error: "",
  loading: "false",
};

export const ShowListeClients = createAsyncThunk(
  "ListeClients/ShowListeClients",
  async (body) => {
    let res = await AinstanceAxios.get("admin/clients", body);
    return await res.data;
  }
);

const FetchListeClients = createSlice({
  name: "ListeClients",
  initialState,

  extraReducers: {
    [ShowListeClients.pending]: (state, action) => {
      state.loading = true;
    },

    [ShowListeClients.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.listeclient = payload;
    },
    [ShowListeClients.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { ShowClients } = FetchListeClients.actions;
export default FetchListeClients.reducer;
