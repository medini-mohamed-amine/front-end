import { configureStore } from "@reduxjs/toolkit";
import authslice from "./Redux/authslice";
// import authclient from "./Redux/authslice";
// import authsociete from "./Redux/authslice";

import companySlice from "./Redux/CompanySlice";

const store = configureStore({
  reducer: {
    User: authslice,
    // client: authclient,
    // societe: authsociete,

    Company: companySlice,
  },
});

export default store;
