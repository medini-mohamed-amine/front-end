import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Aide from "./pages/Aide";
import Footer from "./component/Layout/Footer";
import Header from "./component/Layout/Header";
import PageNotFound from "./pages/PageNotFound";
import Signin from "./pages/Signin";
import Signupclient from "./pages/Signup-client";
import Signupsociete from "./pages/Signup-societe";
import Societes from "./pages/Societes";

import Dashboard from "./pages/Dashboard";
import Listeclients from "./pages/Dashboard/ListeClients";
import Listesocietes from "./pages/Dashboard/ListeSocietes";
import Listeavis from "./pages/Dashboard/ListeAvis";
import DemandeAides from "./pages/Dashboard/DemandeAides";

import { Helmet } from "react-helmet";
import DataSociete from "./pages/DataSociete";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Comparateur</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="comparateur des societes de livraison en tunisie"
        />
      </Helmet>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Societes" element={<Societes />} />
          <Route path="/Aide" element={<Aide />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signupclient" element={<Signupclient />} />
          <Route path="/Signupsociete" element={<Signupsociete />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ListeClients" element={<Listeclients />} />
          <Route path="/ListeSocietes" element={<Listesocietes />} />
          <Route path="/ListeAvis" element={<Listeavis />} />
          <Route path="/DemandeAides" element={<DemandeAides />} />
          <Route path="/DataSociete" element={<DataSociete />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
