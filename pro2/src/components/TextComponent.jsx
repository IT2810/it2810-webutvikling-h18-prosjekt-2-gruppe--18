import React from 'react';

import axios from 'axios';



export default class TextComponent extends React.Component {

    /**
     * Setter start staten av textComponent til å ha en tom dikttabell og en null diktId, samt arrayene som skal holde kategoriene og dere dikt.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            dikt: [],
        };

    }

    /**
     * Henter inn JSON filen med diktene våre og setter dikt arrayen til å holde på det ene dikten som blir valgt
     */
    componentDidMount() {

        axios.get('./media/TextJSON/'+this.props.text.category
        +'Dikt.json')
            .then(res => {
                const poemData = res.data.slice(this.props.text.selectionNumber-1, this.props.text.selectionNumber);
                this.setState({dikt: poemData});
            });

    }

    render() {
    this.componentDidMount();
        return (
                <React.Fragment>
                {this.state.dikt.map(poem => {
                        return poem.id === this.props.text.selectionNumber ?
                            <div key={poem.id} className={"diktTekst"}>
                            <p className={"diktTittel"} >{poem.tittel}</p>
                            <p>{poem.firstLine}</p>
                            <p>{poem.secondLine}</p>
                            <p>{poem.thirdLine}</p>
                            </div>
                            :
                            null
                    }
                )
                }
                </React.Fragment>
        )
    }
}