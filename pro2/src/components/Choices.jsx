import React, { Component } from "react";

class Choices extends Component {
  constructor(props) {
    super(props);
    this._getValueChecked = this._getValueChecked.bind(this);

  }

  _getValueChecked() {
    let checked = document.querySelector(
      'input[name="' + this.props.type + '"]:checked'
    ).value;
    this.props.onChangeValue(checked);
  }

  _storForbokstav() {
    let ord = this.props.type;
    return ord.charAt(0).toUpperCase() + ord.slice(1);
  }

  render() {
    return (
      <div>
        <h3>{this._storForbokstav()} type</h3>
        <form onChange={() => this._getValueChecked()}>
          <div className="inputGroup">
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Cat"
          />
          <label htmlFor={this.props.type}>
              Cat
          </label>
          </div>

          <br />
            <div className="inputGroup">
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Dog"
            defaultChecked="true"
          />
            <label htmlFor={this.props.type}>
                Dog
            </label>
            </div>
          <br />
                <div className="inputGroup">
          <input
            type="radio"
            name={this.props.type}
            id={this.props.type}
            value="Elephant"
          />
            <label htmlFor={this.props.type}>
                Elephant
            </label>
                </div>
        </form>
      </div>
    );
  }
}

export default Choices;
