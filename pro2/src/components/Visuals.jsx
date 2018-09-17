import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

class Visuals extends Component {
  state = {
    image: null
  };

  constructor() {
    super();
  }

  setImage(name) {
    axios.get(`./media/images/` + name + ".svg").then(response => {
      const image = response.data;
      $("#bilde").html(this.state.image);
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
