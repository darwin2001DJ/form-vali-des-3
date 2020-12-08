import React, { Component } from "react";

export default class InputField extends Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.id} className="input-label">
          {this.props.label}
        </label>
        <input
          className="input-textbox"
          type={this.props.type ? this.props.type : "text"}
          value={this.props.value}
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.onChange}
          autoComplete="off"
        />
        <br />
      </>
    );
  }
}
