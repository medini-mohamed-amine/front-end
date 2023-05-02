import React from "react";

import Logo1 from "../../images/404page.jpg";



const PageNotFound = () => {
  return (
    <div>
      <h1>Error 404 Page Not Found </h1>
      <h2>sorry , this page does not exist</h2>
      <img src={Logo1} alt="404 pictur" width="1250" height="430"/>
    </div>
  );
};

export default PageNotFound;
