import React, { Component } from "react";
import "./Loading.css";

const HOC = loadingProp => WrappedComponent => {
  return class LoadingHOC extends Component {
    render() {
      
      return this.props['contacts'].length==0 ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default HOC;
