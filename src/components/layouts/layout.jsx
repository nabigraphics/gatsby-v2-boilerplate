import React from "react";
import Helmet from "react-helmet";

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hello GatsbyJS v2</title>
    </Helmet>
    <div>{children}</div>
  </>
);
