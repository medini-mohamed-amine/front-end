import React from "react";

const Home = () => {
  return (
    <div>
      

      <div class="jumbotron jumbotron-fluid">
        <div class="container">

          <h1 class="display-4">Comparer des sociétés</h1>
          <p class="lead">
            Entrez les noms de deux sociétés à comparer ci-dessous
          </p>
          <form>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Société1"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Société2"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">
                  Comparer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <section class="container mb-5">
        <h2>Résultats de comparaison</h2>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <h3>Société 1</h3>
            <p>Description du société 1</p>
          </div>
          <div class="col-md-6">
            <h3>Société 2</h3>
            <p>Description du société 2</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
