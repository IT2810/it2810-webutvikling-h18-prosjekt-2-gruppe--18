import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this._nav = this._nav.bind(this);
  }
  //La til en funskjon som skal åpne opp sidenav, men funker ikke akkuratt nu.
    openNav = e => {
        e.preventDefault();
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("mySidenav").style.width = "250";
    };
  //La inn i render selve knappen som blir brukt. Denne koden og den funksjonen ovenfor kan flyttes hvor som helst.
    // kanskje inn i en egen komponent?
  render() {
    return (
      <ul>
          <li>
              <span id="sidenavOpenBtn" onClick={this.openNav}>&#9776; open</span>
          </li>
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
      </ul>

    );
  }

  _nav(view) {
    return view;
  }
}

export default Navigation;
