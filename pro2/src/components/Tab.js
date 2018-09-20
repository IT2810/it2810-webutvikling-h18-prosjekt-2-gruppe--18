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
        name: null,
        file: null
      },
      visual: "",
      text: {
        category: "",
        selectionNumber: null
      }
    };

    this.oldSoundType = {};
    this.oldstatus = {};
    this.oldImageType = {};
    this._getAudioFile = this._getAudioFile.bind(this);
  }

  render() {
    // sound
    if (this.oldSoundType !== this.props.soundType) {
      let unique = Math.round(Math.random() * 4 + 0.5);
      let sound_name = this.props.soundType + unique.toString();
      this._getAudioFile(sound_name);
    }
    this.oldSoundType = this.props.soundType;

    // image
    if (this.oldImageType !== this.props.typer.imageType) {
      let unique = Math.round(Math.random() * 4 + 0.5);
      this.state.visual = this.props.typer.imageType + unique.toString();
      this.state.visual = this.state.visual.toLocaleLowerCase();
      console.log("forandret: ", this.state.visual);
    }

    this.oldImageType = this.props.typer.imageType;

    // text
    if (this.oldstatus.textType !== this.props.typer.textType) {
      let unique = Math.round(Math.random() * 4 + 0.5);
      this.state.text.selectionNumber = unique;
      this.state.text.category = this.props.typer.textType;
      console.log("forandret: ", this.state.text.category);
    }

    this.oldstatus.textType = this.props.typer.textType;

    return (
      <div className={this.props.activeStatus}>
        <AudioComponent
          audio={this.state.audio}
          getAudioFile={this._getAudioFile}
        />
        <TextComponent text={this.state.text} />
        <div id="imageContainer">
          <Visuals bilde={this.state.visual} tabInfo={this.props.typer} />
        </div>
      </div>
    );
  }

  /**
   * Fetches the sound and stores it in the state.
   * @private
   */
  _getAudioFile(sound_name) {
    let name = sound_name;

    // validation 1
    // if name is null no option has been selected.
    if (name === null) {
      return;
    }

    // validation 2
    // mostly just used once.
    if (!name.endsWith(".mp3")) {
      name = name + ".mp3";
    }

    let file_name = name.toLowerCase();
    console.log(this.props.id, "filename: ", file_name);
    let file_path = "./media/audio/" + file_name;

    // TODO check if necessary
    let myInit = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    };

    // fetches the sound file and updates the
    // state so that the AudioComponent gets updated.
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

        console.log("Changed state audio to: " + this.state.audio.file);
        return true;
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  }
}
export default Tab;
