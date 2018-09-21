import React, { Component } from "react";

class Choices extends Component {
  constructor(props) {
    super(props);
    this._getValueChecked = this._getValueChecked.bind(this);
  }

  //gets the value of the radio-button checked and sends it to the parent component
  _getValueChecked() {
    let checked = document.querySelector(
      'input[name="' + this.props.type + '"]:checked'
    ).value;
    this.props.onChangeValue(checked);
  }

  //Makes the first letter in the title big
  _storForbokstav() {
    let ord = this.props.type;
    return ord.charAt(0).toUpperCase() + ord.slice(1);
  }

  render() {
    return (
      <div>
        <h3>{this._storForbokstav()} type</h3>
        {/* detects change by using the forms onchange function. Then sends this to a function for sending that infor up to parent component */}
        <form onChange={() => this._getValueChecked()}>
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Cat"
          />
          Cat
          <br />
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Dog"
            defaultChecked="true"
          />
          Dog
          <br />
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Elephant"
          />
          Elephant
        </form>
      </div>
    );
  }
}

export default Choices;
