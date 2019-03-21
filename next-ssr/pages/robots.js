import Link from "next/link";
import fetch from "isomorphic-unfetch";

import React from "react";

class Robots extends React.Component {
  constructor() {
    super();
    this.state = {
      textSearch: null
    };
  }

  static async getInitialProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
      robots: data
    };
  }

  onKeyDown = event => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.onSubmit(event);
    }
  };

  onSearch = event => {
    this.setState({ textSearch: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("submit:", this.state.textSearch);
  };

  render() {
    return (
      <div>
        <h1>Robots</h1>
        <Link href="/">
          <button>Home</button>
        </Link>
        <div>
          {this.props.robots.map(robot => (
            <li key={robot.id}>
              <Link href={`robots/${robot.id}`}>
                <a>{robot.name}</a>
              </Link>
            </li>
          ))}
        </div>
        <form onSubmit={this.onSubmit} onKeyDown={this.onKeyDown}>
          <input
            type="text"
            name="search"
            id="search"
            onChange={this.onSearch}
            autoComplete="false"
          />
          <input type="submit" name="submit" id="submit" />
        </form>
      </div>
    );
  }
}

// Robots.getInitialProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
//   return {
//     robots: data
//   };
// };

export default Robots;
