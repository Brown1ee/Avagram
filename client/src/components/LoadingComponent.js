import React, { Component } from "react";
import "./LoadingComponent.css";

export default class LoadingComponent extends Component {
  render() {
    return (
      <div className="loading">
        <img src={require("../static/loading.gif")} alt="loading" />
      </div>
    );
  }
}
