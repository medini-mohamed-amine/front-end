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

import Admin from "./pages/router/Admin";

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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header />
                <Home />
                <Footer />
              </div>
            }
          />
          <Route
            path="/About"
            element={
              <div>
                <Header /> <About />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Contact"
            element={
              <div>
                <Header />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Societes"
            element={
              <div>
                <Header />
                <Societes />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Aide"
            element={
              <div>
                <Header />
                <Aide />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Signin"
            element={
              <div>
                <Header />
                <Signin />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Signupclient"
            element={
              <div>
                <Header />
                <Signupclient />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Signupsociete"
            element={
              <div>
                <Header />
                <Signupsociete />
                <Footer />
              </div>
            }
          />
          <Route
            path="/DataSociete"
            element={
              <div>
                {/* <Header /> */}
                <DataSociete />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route path="/Admin/*" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
