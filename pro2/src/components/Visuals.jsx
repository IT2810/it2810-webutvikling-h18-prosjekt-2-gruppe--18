import React, { Component } from "react";

/**
 * This component shows the SVG image.
 * It takes it in as a prop from Tab.js.
 */
class Visuals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        };
    }

    /**
     * Starts the generator and runs it once for every Component.
     */
    componentDidMount() {
        this.guidGenerator();
    }


    /**
     * Generates a random id for this Visual Component.
     * This is used for design.
     */
    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };

        let id_val =
            S4() +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            "-" +
            S4() +
            S4() +
            S4();

        this.setState({
            id: id_val
        })
    }

    render() {
        return (
            <div className="bilde">
                <div id={this.state.id} dangerouslySetInnerHTML={{__html: this.props.image.file}}>
                </div>
            </div>
        );
    }
}

export default Visuals;
