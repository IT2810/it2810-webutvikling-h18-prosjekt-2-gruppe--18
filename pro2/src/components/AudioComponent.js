import React, {Component} from 'react';

/**
 * Component that plays chosen audio when one
 * presses the play button. Choice must be made in side bar.
 * Development Status: Completed
 */
class AudioComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>
                    {this.props.audio.name}
                </p>
                <audio src={this.props.audio.file} controls>
                    Audio is not supported in this browser.
                </audio>
            </div>
        )
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
