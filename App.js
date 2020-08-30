/**
 * @author Pavneet Singh
 */

import React, { Component } from "react";
import { parse } from 'fast-xml-parser';
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fname: 'N/A',
      lname: 'N/A',
      phone: 'N/A',
    }
  }

  componentDidMount() {
    this.getXMLResponse();
  }

  getXMLResponse() {
    fetch('https://gist.githubusercontent.com/Pavneet-Sing/d0f3324f2cd3244a6ac8ffc5e8550102/raw/8ebc801b3e4d4987590958978ae58d3f931193a3/XMLResponse.xml')
      .then(this.parseResponseAsText)
      .then(this.logResponse)
      .then(this.parseTextResponse)
      .catch((error) => {
        console.log(error);
      });
  }

  // async getXMLResponse() {
  //     const response = await fetch('https://gist.githubusercontent.com/Pavneet-Sing/d0f3324f2cd3244a6ac8ffc5e8550102/raw/8ebc801b3e4d4987590958978ae58d3f931193a3/XMLResponse.xml')
  //     console.log('response is', await response.text());
  // }

  parseTextResponse = (text) => {
    let doc = parse(text);
    let fname = doc.person.fname;
    let lname = doc.person.lname;
    let phone = doc.person.contacts.personal.phone;
    this.setState({ fname: fname, lname: lname, phone: phone })
  }

  parseResponseAsText(response) {
    return response.text();
  }

  logResponse(response) {
    console.log(response);
    return response;
  }

  render() {
    return (
      <>
      </>
    )
  }
}