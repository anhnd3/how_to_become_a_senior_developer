import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="tc">
        <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={this.props.searchChange} />
      </div>
    );
  }
}
