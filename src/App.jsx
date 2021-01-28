import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ComponentList from "./ComponentList";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { value: name } = event.target;
    this.setState({ name });
  }
  render() {
    const { name } = this.state;
    return (
      <ErrorBoundary>
        <select value={name} onChange={this.handleChange}>
          <option value="">None</option>
          <option value="ComponentOne">Component One</option>
          <option value="ComponentTwo">Component Two</option>
          <option value="ComponentThree">Component Three</option>
        </select>
        <ComponentList name={name} />
      </ErrorBoundary>
    );
  }
}
