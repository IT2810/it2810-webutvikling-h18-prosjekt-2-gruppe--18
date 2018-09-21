import React from 'react';

/**
 * This is used for displaying the text that comes from the
 * parent-component.
 */
export default class TextComponent extends React.Component {
    render() {

        return (
            <div key={this.props.text.file["id"]} className={"diktTekst"}>
                <p className={"diktTittel"} >
                    {this.props.text.file["tittel"]}
                </p>
                <p>{this.props.text.file["firstLine"]}</p>
                <p>{this.props.text.file["secondLine"]}</p>
                <p>{this.props.text.file["thirdLine"]}</p>
            </div>
                )
    }
}