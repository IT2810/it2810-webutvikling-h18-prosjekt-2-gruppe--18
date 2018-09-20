import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

class Visuals extends Component {
  state = {
    id: null
  };
  setImage() {
    axios.get(`./media/images/` + this.props.bilde + ".svg").then(response => {
      let ord = "#" + this.state.id;
      $(ord).html(response.data);
    });
  }

  componentDidMount() {
    this.guidGenerator();
  }

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
      <div>
        <div id={this.state.id} className="bilde" alt="feil url" />
      </div>
    );
  }
}

export default Visuals;
