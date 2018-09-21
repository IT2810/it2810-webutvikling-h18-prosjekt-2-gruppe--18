import React, { Component } from "react";
import Choices from "./Choices";

class Category extends Component {
  constructor(props){
    super(props);
      this.state = {
          mobile: false
      };
  }


  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  handleChangeValueImage = e => {
    this.props.onChangeValue("Image: " + e);
  };
  handleChangeValueSound = e => {
    this.props.onChangeValue("Sound: " + e);
  };
  handleChangeValueText = e => {
    this.props.onChangeValue("Text: " + e);
  };

    resize = e => {
        let size = window.innerWidth;
        if (size <= 600) {
            this.setState({
                mobile: true
            });
        } else {
            this.setState({
                mobile: false
            });
        }
    };
  //Closes the navigation panel
  closeNav = e => {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  };
  //Her er løsningen basicly å dele opp i en div, med 2 sub divs som er like, men omringet av en mobile/nonMobile div
  //Slik at man kan endre enkelt hvem som vises med CSS
  render() {
    let mobile = this.state.mobile;
    if (mobile) {
      return (
        <div id="mySidenav" className="sidenav">
          <a href={null} className="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <div id="Category-container">
            <Choices
              type="image"
              onChangeValue={this.handleChangeValueImage}
            />
            <Choices
              type="sound"
              onChangeValue={this.handleChangeValueSound}
            />
            <Choices
              type="text"
              onChangeValue={this.handleChangeValueText}
            />
          </div>
        </div>
      );
    } else {
      return (
          <div id="nonMobileDiv">
        <div id="Category-container">
          <Choices
            type="image"
            onChangeValue={this.handleChangeValueImage}
          />
          <Choices
            type="sound"
            onChangeValue={this.handleChangeValueSound}
          />
          <Choices
            type="text"
            onChangeValue={this.handleChangeValueText}
          />
        </div>
          </div>
      );
    }
}
}

export default Category;
