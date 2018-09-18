import React, { Component } from "react";
import AudioComponent from "./AudioComponent.js";
import TextComponent from "./TextComponent";
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

this.oldSoundType = {};
this.oldstatus = {};
this._getAudioFile = this._getAudioFile.bind(this);
}

render() {

    if (this.oldSoundType !== this.props.soundType) {
        let unique = Math.round(Math.random() * 4 + 0.5);
        console.log(unique);
        this.state.audio = this.props.soundType + unique.toString();
        console.log("forandret: ", this.state.audio);
        this._getAudioFile();
    }

    this.oldSoundType = this.props.soundType;

    if (this.oldstatus.imageType !== this.props.typer.imageType) {
      let unique = Math.round(Math.random() * 4 + 0.5);
      this.state.visual = this.props.typer.imageType + unique.toString();
      this.state.visual = this.state.visual.toLocaleLowerCase();
      console.log("forandret: ", this.state.visual);
    }

    this.oldstatus = this.props.typer;
        return (
          <div
              className={this.props.activeStatus}
          >
            <h1>{this.props.name}</h1>
            <AudioComponent
              audio={this.state.audio}
              getAudioFile={this._getAudioFile}
            />
            <TextComponent />
            <Visuals bilde={this.state.visual} />
          </div>
        );
    }


    _getAudioFile() {
        console.log("Did I put enough work in?");
        console.log(this.props.soundType + "props.soundType");
        if (this.props.soundType === null) {
            console.log("Is null inside if-statement");
            return;
        }
        let file_name = this.props.soundType.toLowerCase() +  ".mp3";
        console.log(file_name);
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
