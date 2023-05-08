import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  client: "",
  errorclient: "",
  loadingclient: "false",
};

export const addclient = createAsyncThunk("Client/addclient", async (body) => {
  let res = await AinstanceAxios.post("authentification/registerclient", body);
  return await res;
});

const registerClient = createSlice({
  name: "Client",
  initialState,

  extraReducers: {
    [addclient.pending]: (state, action) => {
      state.loading = true;
    },

    [addclient.fulfilled]: (state, { payload }) => {
      state.loadingclient = false;
      state.client = payload;
    },
    [addclient.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { signupclient } = registerClient.actions;
export default registerClient.reducer;
