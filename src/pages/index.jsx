// import index scss file.
import "./index.scss";
// react
import React, { Component } from "react";
import { Layout } from "components/layouts";

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <h1 className="title">
          <span role="img" aria-label="Waving Hand">
            👋
          </span>{" "}
          Hi, GatsbyJS
        </h1>
      </Layout>
    );
  }
}

export default IndexPage;
