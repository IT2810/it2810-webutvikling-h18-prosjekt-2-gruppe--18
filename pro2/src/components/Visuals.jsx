import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

class Visuals extends Component {


  setImage(name) {
    axios.get(`./media/images/` + name + ".svg").then(response => {
      $("#bilde").html(response.data);
    });
  }

  render() {
    this.setImage(this.props.bilde);
    return (
      <div>
        <div id="bilde">Faulty image url</div>
      </div>
    );
  }
}

export default Visuals;
