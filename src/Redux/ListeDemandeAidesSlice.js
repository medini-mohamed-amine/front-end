import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  DemandeAide: "",
  error: "",
  loading: "false",
};

export const ShowListeDemandeAide = createAsyncThunk(
  "ListeDemandeAide/ShowListeDemandeAide",
  async (body) => {
    let res = await AinstanceAxios.get("admin/questions", body);
    return await res.data;
  }
);

const FetchListeDemandeAide = createSlice({
  name: "ListeDemandeAide",
  initialState,

  extraReducers: {
    [ShowListeDemandeAide.pending]: (state, action) => {
      state.loading = true;
    },

    [ShowListeDemandeAide.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.DemandeAide = payload;
    },
    [ShowListeDemandeAide.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { ShowDemandeAide } = FetchListeDemandeAide.actions;
export default FetchListeDemandeAide.reducer;
