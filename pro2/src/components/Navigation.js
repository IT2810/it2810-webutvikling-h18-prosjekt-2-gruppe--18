import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this._nav = this._nav.bind(this);
  }
  //La til en funskjon som skal åpne opp sidenav, men funker ikke akkuratt nu.

  //La inn i render selve knappen som blir brukt. Denne koden og den funksjonen ovenfor kan flyttes hvor som helst.
  // kanskje inn i en egen komponent?
  render() {
    return (
        <React.Fragment>
        <div id="navBar">
      <ul>
        <li>
          <a href="#" onClick={this.props.onNav.bind(null, this._nav("tab1"))}>
            Tab 1
          </a>
        </li>
        <li>
          <a href="#" onClick={this.props.onNav.bind(null, this._nav("tab2"))}>
            Tab 2
          </a>
        </li>
        <li>
          <a href="#" onClick={this.props.onNav.bind(null, this._nav("tab3"))}>
            Tab 3
          </a>
        </li>
        <li>
          <a href="#" onClick={this.props.onNav.bind(null, this._nav("tab4"))}>
            Tab 4
          </a>
        </li>
        <li>
        </li>
      </ul>
        </div>
        </React.Fragment>
    );
  }

  _nav(view) {
    return view;
  }
}

export default Navigation;
