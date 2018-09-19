import React, {Component} from 'react';

/**
 * Component that plays chosen audio when one
 * presses the button on this component.
 */
class AudioComponent extends Component {

    render() {
        return (
            <div>
                <p>
                    {this.props.audio.name}
                </p>
                <audio src={this.props.audio.file} controls>
                    Audio not supported in this browser.
                </audio>
            </div>
        )
    }
}

//TODO: remove console.logs


export default AudioComponent;

// TODO: place sources for .mp3 correctly.

// Dogs
// https://freesound.org/people/Princess6537/sounds/144885/
// https://freesound.org/people/arightwizard/sounds/253754/
// https://freesound.org/people/rhostik/sounds/220904/
// https://freesound.org/people/CGEffex/sounds/85664/

// Cats
// https://freesound.org/people/spacether/sounds/385892/
// https://freesound.org/people/josepharaoh99/sounds/362953/
// https://freesound.org/people/vlcikamen/sounds/362327/
// https://freesound.org/people/sonsdebarcelona/sounds/187815/

// Elephant
// http://soundbible.com/1140-Elephant.html
// http://soundbible.com/1136-Elephant-Trumpeting.html
