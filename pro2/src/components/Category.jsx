import React, { Component } from "react";
import Choices from "./Choices";


/**
 * This is the category component which takes care
 * of the choices component. This also handles the change
 * from hamburger-part category to the regular category.
 */
class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobile: false
        };
    }

    /**
     * Starts a 'resize-check' which checks
     * for change in display size
     */
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }


    /**
     * This handles the change of different values for the
     * three different types.
     * @param e
     */
    handleChangeValueImage = e => {
        this.props.onChangeValue("Image: " + e);
    };

    handleChangeValueSound = e => {
        this.props.onChangeValue("Sound: " + e);
    };

    handleChangeValueText = e => {
        this.props.onChangeValue("Text: " + e);
    };

    /**
     * This changes the state of mobile if
     * the screen is less than the specified amount.
     * This changes the category view (mobile or not mobile).
     * @param e
     */
    resize = e => {
        let sizeX = window.innerWidth;
        let sizeY = window.innerHeight;
        if ((sizeX <= 600) || (sizeY <= 417)){
            this.setState({
                mobile: true
            });
        } else {
            this.setState({
                mobile: false
            });
        }
    };

    /**
     * Closes the navigation panel
     * @param e
     */
    closeNav = e => {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
    };

    render() {
        let mobile = this.state.mobile;
        if (mobile) {
            return (
                <div id="mySidenav" className="sidenav">
                    <a href={null} className="closebtn" onClick={this.closeNav}>
                        &times;
                    </a>
                    <div id="Category-container">
                        <Choices
                            type="image"
                            onChangeValue={this.handleChangeValueImage}
                        />
                        <Choices
                            type="sound"
                            onChangeValue={this.handleChangeValueSound}
                        />
                        <Choices
                            type="text"
                            onChangeValue={this.handleChangeValueText}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div id="nonMobileDiv">
                    <div id="Category-container">
                        <Choices
                            type="image"
                            onChangeValue={this.handleChangeValueImage}
                        />
                        <Choices
                            type="sound"
                            onChangeValue={this.handleChangeValueSound}
                        />
                        <Choices
                            type="text"
                            onChangeValue={this.handleChangeValueText}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default Category;
