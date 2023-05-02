import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "./../instance";

let initialState = {
  user: "",
  error: "",
  loading: "false",
};

// let initialStateclient = {
//   client: "",
//   errorclient: "",
//   loadingclient: "false",
// };

// let initialStatesociete = {
//   societe: "",
//   errorsociete: "",
//   loadingsociete: "false",
// };

// export const addclient = createAsyncThunk("client/addclient", async (body) => {
//   let res = await AinstanceAxios.post("authentification/registerclient", body);
//   return await res.data;
// });

// const authclient = createSlice({
//   name: "client",
//   initialStateclient,

//   extraReducers: {
//     [addclient.fulfilled]: (state, { payload: { client } }) => {
//       state.loadingclient = true;
//       state.client = "valid";
//     },
//   },
// });

// export const addsociete = createAsyncThunk(
//   "societe/addsociete",
//   async (body) => {
//     let res = await AinstanceAxios.post(
//       "authentification/registersociete",
//       body
//     );
//     return await res.data;
//   }
// );

// const authsociete = createSlice({
//   name: "societe",
//   initialStatesociete,

//   extraReducers: {
//     [addsociete.fulfilled]: (state, { payload: { societe } }) => {
//       state.loadingsociete = true;
//       state.societe = "valid";
//     },
//   },
// });

export const loginUser = createAsyncThunk("user/loginUser", async (body) => {
  let res = await AinstanceAxios.post("authentification/loginclient", body);
  return await res.data;
});

const authSlice = createSlice({
  name: "User",
  initialState,

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload: { user } }) => {
      state.loading = true;
      state.user = "valid";
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});


// export const { signupclient } = authclient.actions;
// export const { signupsociete } = authsociete.actions;

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
