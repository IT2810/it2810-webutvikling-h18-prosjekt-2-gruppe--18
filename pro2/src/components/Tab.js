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
this._getAudioFile = this._getAudioFile.bind(this);
}

render() {
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


    /**
     * Checks to see if AJAX should fetch the
     * new sound file and update the state.
     */
    componentDidUpdate() {
        if (this.oldSoundType !== this.props.soundType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            this.state.audio.name = this.props.soundType + unique.toString();
            this._getAudioFile();
        }

        this.oldSoundType = this.props.soundType;
    }


    /**
     * Fetches the sound and stores it in the state.
     * @private
     */
    _getAudioFile() {
        let name = this.state.audio.name;

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
        console.log("filename: " + file_name);
        let file_path = "./media/audio/" + file_name;

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

            console.log("Changed state audio to: " + this.state.audio);
            return true;
          })
          .catch(error => {
            console.log(error);
            return false;
          });
        }
}
export default Tab;
