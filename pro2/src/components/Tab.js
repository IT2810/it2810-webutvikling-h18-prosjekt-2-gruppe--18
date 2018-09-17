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
    this._getAudioFile = this._getAudioFile.bind(this);
    }

    render() {
        return (
          <div className="tab-content">
            <h1>{this.props.name}</h1>
            <AudioComponent
              audio={this.state.audio}
              getAudioFile={this._getAudioFile}
            />
            <TextComponent />
            <Visuals/>
          </div>
        );
    }

    _getAudioFile() {
        if (this.props.soundType === null) {
            return;
        }
        let file_name = this.props.soundType.toLowerCase() + this.props.num + ".mp3";
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
