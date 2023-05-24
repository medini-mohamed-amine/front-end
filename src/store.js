import { configureStore } from "@reduxjs/toolkit";
import authslice from "./Redux/LoginSlice";
import companySlice from "./Redux/CompanySlice";
import registerClient from "./Redux/SignupClientSlice";
import registerSociete from "./Redux/SignupSocieteSlice";
import registerDataSociete from "./Redux/DataSocieteSlice";
import FetchListeClients from "./Redux/ListeClientsSlice";
import FetchListeSocietes from "./Redux/ListeSocietesSlice";
import FetchListeAvis from "./Redux/ListeAvisSlice";
import FetchListeDemandeAide from "./Redux/ListeDemandeAidesSlice";
import ResultatComparison from "./Redux/HomeSlice";
import getAvisClients from "./Redux/AvisSlice";

const store = configureStore({
  reducer: {
    User: authslice,
    Company: companySlice,
    Client: registerClient,
    Societe: registerSociete,
    Datasociete: registerDataSociete,
    ListeClients: FetchListeClients,
    ListesSocietes: FetchListeSocietes,
    ListeAvis: FetchListeAvis,
    ListeDemandeAide: FetchListeDemandeAide,
    TwoCompanies: ResultatComparison,
    Avis: getAvisClients,
  },
});

export default store;
