import React, { Component } from "react";
import Choices from "./Choices";

class Category extends Component {
  state = {
    textType: null,
    imageType: null,
    soundType: null,
  };

  sendInfoUp() {
    this.props.onChangeValue(this.state);
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

  //Closes the navigation panel
  closeNav = e => {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
    };
//Her er løsningen basicly å dele opp i en div, med 2 sub divs som er like, men omringet av en mobile/nonMobile div
    //Slik at man kan endre enkelt hvem som vises med CSS
  render() {
          return(
             <div>
                 <div id="nonMobileDiv">
              <div id="Category-container">
                  <Choices
                      type="image"
                      value={this.state.imageType}
                      onChangeValue={this.handleChangeValueImage}
                  />
                  <Choices
                      type="sound"
                      value={this.state.soundType}
                      onChangeValue={this.handleChangeValueSound}
                  />
                  <Choices
                      type="text"
                      value={this.state.textType}
                      onChangeValue={this.handleChangeValueText}
                  />
              </div>
             </div>

              <div id="mySidenav" className="sidenav">
                  /* The button for closing the sidenav*/
                  <a href={null} className="closebtn" onClick={this.closeNav}>&times;</a>
              <div id="Category-container">
                  <Choices
                      type="image"
                      value={this.state.imageType}
                      onChangeValue={this.handleChangeValueImage}
                  />
                  <Choices
                      type="sound"
                      value={this.state.soundType}
                      onChangeValue={this.handleChangeValueSound}
                  />
                  <Choices
                      type="text"
                      value={this.state.textType}
                      onChangeValue={this.handleChangeValueText}
                  />
              </div>
              </div>
             </div>


          )
      }
}

export default Category;
