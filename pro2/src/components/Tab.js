import React, { Component } from "react";
import AudioComponent from "./AudioComponent.js";
import TextComponent from "./TextComponent.jsx";
import Visuals from "./Visuals";

/**
 * Tab component that takes care of text, visuals and audio.
 * Development Status: Unfinished
 */
class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // structure of state
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

        this._getAudioFile = this._getAudioFile.bind(this);
        this._updateVisual = this._updateVisual.bind(this);


        this.oldSoundType = {};
        this.oldstatus = {};
        this.oldImageType = {};
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
            // this._updateVisual(this.props.typer.imageType, unique);
            this.state.visual = this.props.typer.imageType + unique.toString();
            this.state.visual = this.state.visual.toLocaleLowerCase();
            console.log("forandret: ", this.state.visual);
        }

        this.oldImageType = this.props.typer.imageType;

        // text
        if(this.oldstatus.textType !== this.props.typer.textType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            this.state.text.selectionNumber = unique;
            this.state.text.category = this.props.typer.textType;
            console.log("forandret: ", this.state.text.category);
        }

        this.oldstatus.textType = this.props.typer.textType;

        return (
            <div className={this.props.activeStatus}>
                <h1>{this.props.name}</h1>
                <AudioComponent
                    audio={this.state.audio}
                />
                <TextComponent
                    text={this.state.text}/>
                <Visuals bilde={this.state.visual} />
            </div>
        );
    }

    /**
     * Not used right now
     * @param type
     * @param num
     * @private
     */
    _updateVisual(type, num) {
        this.setState({
            visual: (type + num).toLowerCase()
        })
    }

    /**
     * Not in use.
     * @param type
     * @param num
     * @private
     */
    _updateText(type, num) {
        this.setState(() => {
            text: {

            }
        })
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
                return true;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    }
}
export default Tab;