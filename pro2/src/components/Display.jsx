import React, { Component } from "react";
import Tab from "./Tab";
import Navigation from "./Navigation";
import Category from "./Category";

/**
 * This is the component that binds all the
 * subcomponents to App.js. Here the states of the chosen
 * image, text and sound types are inserted and updated.
 * Here the Navigation section and the different tabs are
 * initialized.
 */
class Display extends Component {
    constructor() {
        super();
        this.state = {
            view: "tab1",
            textType: "Dog",
            imageType: "Dog",
            soundType: "Dog",
        };

        this._onNav = this._onNav.bind(this);
        this._getInfoFromCategories = this._getInfoFromCategories.bind(this);
    }

    /**
     * Retrieves info from Category.jsx (and Choice.jsx)
     * and updates the state of Display. This sets of a chain
     * change that eventually changes the visual of the website.
     * @param info
     * @private
     */
    _getInfoFromCategories = info => {
        if (info.startsWith("Text")) {
            this.setState({textType: info.substring(6, info.length)});
        }
        if (info.startsWith("Image")) {
            this.setState({imageType: info.substring(7, info.length)});
        }
        if (info.startsWith("Sound")) {
            this.setState({soundType: info.substring(7, info.length)});
        }

    };


    render() {
        return (
            <div>
                <Navigation onNav={this._onNav}/>
                <div id="tab-container">
                    <Tab id="tab1"
                         soundType={this.state.soundType}
                         typer={this.state}
                         activeStatus = {this.state.view === "tab1"
                             ? 'tab-active' : 'tab-inactive'}
                         name="Tab 1"/>

                    <Tab id="tab2"
                         soundType={this.state.soundType}
                         typer={this.state}
                         activeStatus = {this.state.view === "tab2"
                             ? 'tab-active' : 'tab-inactive'}
                         name="Tab 2"/>

                    <Tab id="tab3"
                         soundType={this.state.soundType}
                         typer={this.state}
                         activeStatus = {this.state.view === "tab3"
                             ? 'tab-active' : 'tab-inactive'}
                         name="Tab 3"/>

                    <Tab id="tab4"
                         soundType={this.state.soundType}
                         typer={this.state}
                         activeStatus = {this.state.view === "tab4"
                             ? 'tab-active' : 'tab-inactive'}
                         name="Tab 4"/>
                    <Category statTypes={this.state} onChangeValue={this._getInfoFromCategories}/>
                </div>
            </div>
        )
    }

    /**
     * This is used by subcomponents to change the view-variable in this state.
     * This is used for changing tabs and storing what tabs is
     * currently being viewed (AKA active tab).
     * This is currently used by:
     *   - Navigation.js
     * @param current_view
     * @private
     */
    _onNav(current_view) {
        this.setState(() => ({
            view: current_view,
        }));
    }
}

export default Display;
