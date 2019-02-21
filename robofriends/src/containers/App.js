import React, { Component } from "react";
import { connect } from "react-redux";

import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../SearchBox";
import ErrorBountry from "../components/ErrorBountry";
import "./App.css";

import { setSearchField, requestRobots } from "../action";

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {
      searchField,
      onSearchChange,
      robots,
      isPending,
      error
    } = this.props;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (filteredRobots.length > 0) {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBountry>
              <CardList robots={filteredRobots} />
            </ErrorBountry>
          </Scroll>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1 className="f2">Loading</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.idPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
