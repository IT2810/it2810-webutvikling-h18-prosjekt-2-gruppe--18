import React, { Component } from "react";
import Tab from "./Tab";
import Navigation from "./Navigation";
import Category from "./Category";

class Display extends Component {
  constructor() {
    super();
    this.state = {
        view: "tab1",
        textType: null,
        imageType: null,
        soundType: null
    };
    this._onNav = this._onNav.bind(this);
    this._setDisplayNone = this._setDisplayNone.bind(this);
  }

    getInfoFromCategories = info => {
        if (info.startsWith("Text")) {
            console.log(info);
            this.setState({ textType: info.substring(6, info.length) });
        }
        if (info.startsWith("Image")) {
            console.log(info);
            this.setState({ imageType: info.substring(7, info.length) });
        }
        if (info.startsWith("Sound")) {
            console.log(info);
            this.setState({ soundType: info.substring(7, info.length) });
        }
    };
  render() {

      return (
        <div>
            <Navigation onNav={this._onNav}/>
            <Tab id="t1" name="Tab 1"/>
            <Tab id="t2" name="Tab 2"/>
            <Tab id="t3" name="Tab 3"/>
            <Tab id="t4" name="Tab 4"/>
            <Category onChangeValue={this.getInfoFromCategories} />
        </div>
      )
  }

  _onNav(current_view) {
    this.setState( {
        view: current_view
    });
    this._setDisplayNone()
  }

  _setDisplayNone() {
      for (let i = 1; i < 4; i++) {
          let tab_id = "t" + i;
          let chosen_tab = document.getElementById(tab_id);
          if (tab_id !== this.state.view) {
              chosen_tab.style.display = 'none';
          } else {
              chosen_tab.style.display = 'inline';
          }
      }
  }

}

export default Display;
