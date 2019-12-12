import React, { Component } from "react";
import "./Unprotected.css";
import { Button, Heading } from "react-bulma-components";
import { API } from "aws-amplify";

export default class Unprotected extends Component {
  callAPI() {
    return API.get("ApiGatewayRestApi", "/test")
      .then(res => console.log(JSON.stringify(res)))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Unprotected">
        <Heading size={2}>Unprotected page</Heading>
        <Button color="danger" onClick={this.callAPI}>
          Call protected API
        </Button>
        <p>(See console)</p>
      </div>
    );
  }
}
