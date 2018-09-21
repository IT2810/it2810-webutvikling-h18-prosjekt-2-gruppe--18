import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

class Visuals extends Component {
  state = {
    id: null
  };
  //Changes the component with id = this.state.id to the name of the file the component gets from the props
  setImage() {
    axios.get(`./media/images/` + this.props.bilde + ".svg").then(response => {
      let ord = "#" + this.state.id;
      $(ord).html(response.data);
    });
  }

  //generatesa random id for the picture for easier editing
  componentDidMount() {
    this.guidGenerator();
  }

  //random id generator
  guidGenerator() {
    var S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    this.state.id =
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4();
  }

  render() {
    this.setImage();
    return (
      <div className="bilde">
        <div id={this.state.id} alt="feil url" />
      </div>
    );
  }
}

export default Visuals;
