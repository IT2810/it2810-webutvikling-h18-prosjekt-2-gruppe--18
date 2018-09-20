import React from 'react';

import axios from 'axios';



export default class TextComponent extends React.Component {

    /**
     * Setter start staten av textComponent til å ha en tom dikttabell og en null diktId, samt arrayene som skal holde kategoriene og dere dikt.
     * @param props
     */
    constructor(props) {
        super(props);
    }

    render() {

        return (
                <div key={this.props.text.file["id"]} className={"diktTekst"}>
                <p className={"diktTittel"} >{this.props.text.file["tittel"]}</p>
                <p>{this.props.text.file["firstLine"]}</p>
                <p>{this.props.text.file["secondLine"]}</p>
                <p>{this.props.text.file["thirdLine"]}</p>
                </div>
                )
    }
}