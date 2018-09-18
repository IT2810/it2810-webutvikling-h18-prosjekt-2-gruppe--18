import React, { Component } from "react";
import AudioComponent from "./AudioComponent.js";
import TextComponent from "./TextComponent.jsx";
import Visuals from "./Visuals";

/**
 * Tab component that takes care of text, visuals and audio.
 */
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: {
        name: "",
        file: {}
      },
      visual: "",
      text: {
        category: "",
        selectionNumber: null
      }
    };
    this.oldstatus = {};
    this._getAudioFile = this._getAudioFile.bind(this);
  }

  render() {
    if (this.oldstatus.imageType !== this.props.typer.imageType) {
      let unique = Math.round(Math.random() * 4 + 0.5);
      this.state.visual = this.props.typer.imageType + unique.toString();
      this.state.visual = this.state.visual.toLocaleLowerCase();
      console.log("forandret: ", this.state.visual);
    }
    if(this.oldstatus.textType !== this.props.typer.textType){
        let unique = Math.round(Math.random() * 4 + 0.5);
        this.state.text.selectionNumber = unique;
        this.state.text.category = this.props.typer.textType;
        console.log("forandret: ", this.state.text.category);
    }

    this.oldstatus = this.props.typer;
    return (
      <div className="tab-content">
        <h1>{this.props.name}</h1>
        <AudioComponent
          audio={this.state.audio}
          getAudioFile={this._getAudioFile}
        />
        <TextComponent text={this.state.text} />
        <Visuals bilde={this.state.visual} />
      </div>
    );
  }

  _getAudioFile(file_name) {
    if (file_name === this.state.audio.name) {
      console.log("Name equal");
      return;
    }
    let file_path = "./media/audio/" + file_name;
    let myInit = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    };

    fetch(file_path, myInit)
      .then(response => {
        return response.blob();
      })
      .then(blob => {
        let obj = URL.createObjectURL(blob);

        this.setState({
          audio: {
            name: file_name,
            file: obj
          }
        });
        console.log("Changed state audio to: " + obj.toString());
        return true;
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  }
}
export default Tab;
