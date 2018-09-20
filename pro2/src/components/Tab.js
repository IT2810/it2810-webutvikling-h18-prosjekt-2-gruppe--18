import React, { Component } from "react";
import AudioComponent from "./AudioComponent.js";
import TextComponent from "./TextComponent.jsx";
import Visuals from "./Visuals";
import axios from "axios";

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
                selectionNumber: null,
                file: []
            }
        };

        this.oldTextType = {};
        this.oldImageType = {};
        this._getAudioFile = this._getAudioFile.bind(this);
        this._getTextFile = this._getTextFile.bind(this);
        this._updateSubComponents = this._updateSubComponents.bind(this);
    }



    componentDidMount() {
        // FIXME update at start of initial render
        // current setup not work.
        // this._updateSubComponents();

        // sound
        let unique = Math.round(Math.random() * 4 + 0.5);
        let sound_name = this.props.soundType + unique.toString();
        this._getAudioFile(sound_name);
    }


    componentDidUpdate(prevProps) {
        this._updateSubComponents(prevProps);
    }


    // to be used in componentDidUpdate
    _updateSubComponents(prevProps) {
        if (prevProps.soundType !== this.props.soundType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            let sound_name = this.props.soundType + unique.toString();
            this._getAudioFile(sound_name);
        }

        // TODO fix same feature for image and text
        // so it's not in render.
    }
    render() {
        if (this.oldImageType !== this.props.typer.imageType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            this.state.visual = this.props.typer.imageType + unique.toString();
            this.state.visual = this.state.visual.toLocaleLowerCase();
            console.log("forandret: ", this.state.visual);
        }

        this.oldImageType = this.props.typer.imageType;

        if(this.oldTextType !== this.props.typer.textType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            let CategoryType = this.props.typer.textType;
            this._getTextFile(unique, CategoryType);
        }

        this.oldTextType = this.props.typer.textType;

        return (
            <div className={this.props.activeStatus}>
                <AudioComponent
                    audio={this.state.audio}/>
                <TextComponent
                    text={this.state.text}/>
                <div id="imageContainer">
                    <Visuals bilde={this.state.visual}/>
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
        let file_path = "./media/audio/" + file_name;

        // fetches the sound file and updates the
        // state so that the AudioComponent gets updated.
        fetch(file_path)
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
            })
            .catch(error => {
                console.log(error);
            });
    }

    _getTextFile(number, type){
        let Data = [];
        let url = ('./media/TextJSON/'+type
            +'Dikt.json');

        axios.get(url)
            .then(res => {
                let poemData = res.data.slice(number-1, number);
                Data = poemData[0];
                this.setState({
                    text: {
                        file: Data,
                        textType: type,
                        selectionNumber: number,
                    }
                });
            });
    }
}
export default Tab;
