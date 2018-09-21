import React, { Component } from "react";

/**
 * Component that plays chosen audio when one
 * presses the play button. Choice must be made in side bar.
 * Development Status: Completed
 */
class AudioComponent extends Component {
  constructor(props) {
    super(props);
  }

  fjernMP3() {
    if (this.props.audio.name !== null) {
      let navn = this.props.audio.name;
      navn = navn.slice(0, navn.length - 4);
      navn = navn.charAt(0).toUpperCase() + navn.slice(1);
      navn =
        navn.substr(0, navn.length - 1) +
        " " +
        navn.substr(navn.length - 1, navn.length);
      return navn;
    }
    return null;
  }

  render() {
    return (
      <div id="AudioComponent">
        <p>{this.fjernMP3()}</p>
        <audio src={this.props.audio.file} controls>
          Audio is not supported in this browser.
        </audio>
      </div>
    );
  }
}

//TODO: remove console.logs

export default AudioComponent;

// TODO: place sources for .mp3 correctly.

// Dog
// https://freesound.org/people/Princess6537/sounds/144885/
// https://freesound.org/people/arightwizard/sounds/253754/
// https://freesound.org/people/rhostik/sounds/220904/
// https://freesound.org/people/CGEffex/sounds/85664/

// Cat
// https://freesound.org/people/spacether/sounds/385892/
// https://freesound.org/people/josepharaoh99/sounds/362953/
// https://freesound.org/people/vlcikamen/sounds/362327/
// https://freesound.org/people/sonsdebarcelona/sounds/187815/

// Elephant
// http://soundbible.com/1140-Elephant.html
// http://soundbible.com/1136-Elephant-Trumpeting.html
