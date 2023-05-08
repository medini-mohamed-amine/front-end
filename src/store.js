import { configureStore } from "@reduxjs/toolkit";
import authslice from "./Redux/LoginSlice";
import companySlice from "./Redux/CompanySlice";
import registerClient from "./Redux/SignupClientSlice";
import registerSociete from "./Redux/SignupSocieteSlice";
import registerDataSociete from "./Redux/DataSocieteSlice";
import FetchListeClients from "./Redux/ListeClientsSlice";
import ResultatComparison from "./Redux/HomeSlice";

const store = configureStore({
  reducer: {
    User: authslice,
    Company: companySlice,
    Client: registerClient,
    Societe: registerSociete,
    Datasociete: registerDataSociete,
    ListeClients: FetchListeClients,
    TwoCompanies: ResultatComparison,
  },
});

export default store;
