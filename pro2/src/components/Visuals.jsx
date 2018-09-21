import React, { Component } from "react";

class Visuals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        };
    }

    componentDidMount() {
        this.guidGenerator();
    }

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
