import React, { Component } from "react";
import AudioComponent from "./AudioComponent.js";
import TextComponent from "./TextComponent.jsx";
import Visuals from "./Visuals";
import axios from "axios";

/**
 * Tab component that takes care of text, visuals and audio.
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
            visual: {
                file: null
            },
            text: {
                category: "",
                selectionNumber: null,
                file: []
            }
        };

        this._getAudioFile = this._getAudioFile.bind(this);
        this._getTextFile = this._getTextFile.bind(this);
        this._updateSubComponents = this._updateSubComponents.bind(this);
        this._getImageFile = this._getImageFile.bind(this);
    }


    /**
     * Loads the files as the site is initialized.
     */
    componentDidMount() {

        // sound
        let unique = Math.round(Math.random() * 4 + 0.5);
        let sound_name = this.props.soundType + unique.toString();
        this._getAudioFile(sound_name);

        // text
        let unique2 = Math.round(Math.random() * 4 + 0.5);
        let CategoryType = this.props.typer.textType;
        this._getTextFile(unique2, CategoryType);

        // image
        let unique3 = Math.round(Math.random() * 4 + 0.5);
        let image_name = this.props.typer.imageType + unique3.toString();
        this._getImageFile(image_name);
    }


    componentDidUpdate(prevProps) {
        this._updateSubComponents(prevProps);
    }

    /**
     * Is used in componentDidUpdate to update files.
     * @param prevProps
     * @private
     */
    _updateSubComponents(prevProps) {

        // sound
        if (prevProps.soundType !== this.props.soundType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            let sound_name = this.props.soundType + unique.toString();
            this._getAudioFile(sound_name);
        }

        // text
        if (prevProps.typer.textType !== this.props.typer.textType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            let CategoryType = this.props.typer.textType;
            this._getTextFile(unique, CategoryType);
        }

        // image
        if (prevProps.typer.imageType !== this.props.typer.imageType) {
            let unique = Math.round(Math.random() * 4 + 0.5);
            let image_name = this.props.typer.imageType + unique.toString();
            this._getImageFile(image_name);
        }

    }
    render() {
        return (
            <div className={this.props.activeStatus}>
                <AudioComponent
                    audio={this.state.audio}/>
                <TextComponent
                    text={this.state.text}/>
                <div id="imageContainer">
                    <Visuals image={this.state.visual}/>
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

    /**
     * Fetches the text with AJAX.
     * @param number
     * @param type
     * @private
     */
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

    /**
     * Fetches the image with AJAX.
     * @param image_name
     * @private
     */
    _getImageFile(image_name) {
        axios.get(`./media/images/` + image_name + ".svg").then(response => {
            let obj = response.data;

            this.setState({
                visual: {
                    file: obj
                }
            })
        });
    }
}
export default Tab;
