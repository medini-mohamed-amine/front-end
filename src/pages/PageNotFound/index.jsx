import React from "react";

import Error from "../../images/404page.jpg";
// const logo = require("404page.jpg")


const PageNotFound = () => {
  return (
    <div>
      <h1>Error 404 Page Not Found </h1>
      <h2>sorry , this page does not exist</h2>
      <img src={Error} alt="404" width="1250" height="430" />
    </div>
  );
};

export default PageNotFound;
