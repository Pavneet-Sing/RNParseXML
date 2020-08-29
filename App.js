/**
 * @author Pavneet Singh
 */

import React, { Component } from "react";
export default class App extends Component {

  componentDidMount() {
    this.getXMLResponse();
  }

  getXMLResponse() {
    fetch('https://gist.githubusercontent.com/Pavneet-Sing/d0f3324f2cd3244a6ac8ffc5e8550102/raw/8ebc801b3e4d4987590958978ae58d3f931193a3/XMLResponse.xml')
      .then(this.parseResponseAsText)
      .then(this.logResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  // async getXMLResponse() {
  //     const response = await fetch('https://gist.githubusercontent.com/Pavneet-Sing/d0f3324f2cd3244a6ac8ffc5e8550102/raw/8ebc801b3e4d4987590958978ae58d3f931193a3/XMLResponse.xml')
  //     console.log('response is', await response.text());
  // }

  parseResponseAsText(response) {
    return response.text();
  }

  logResponse(response) {
    console.log(response);
    return response;
  }

  render() {
    return (
      <></>
    )
  }
}