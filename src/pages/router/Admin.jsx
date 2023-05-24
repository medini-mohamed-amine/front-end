import { Routes, Route } from "react-router-dom";

import Listeclients from "../../SideBar/ListeClients";
import Listesocietes from "../../SideBar/ListeSocietes";
import Listeavis from "../../SideBar/ListeAvis";
import DemandeAides from "../../SideBar/DemandeAides";

import SideBar from "../../SideBar";
import Dashboard from "../../Dashboard";

function Admin() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ListeClients" element={<Listeclients />} />
        <Route path="/ListeSocietes" element={<Listesocietes />} />
        <Route path="/ListeAvis" element={<Listeavis />} />
        <Route path="/DemandeAides" element={<DemandeAides />} />
      </Routes>
    </div>
  );
}

export default Admin;

// <Route path="*" element={<PageNotFound />} />
