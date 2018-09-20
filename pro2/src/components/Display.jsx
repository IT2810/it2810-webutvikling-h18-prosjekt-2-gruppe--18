import React, { Component } from "react";
import Tab from "./Tab";
import Navigation from "./Navigation";
import Category from "./Category";

class Display extends Component {
    constructor() {
        super();
        this.state = {
            view: "tab1",
            textType: "Dog",
            imageType: "Dog",
            soundType: "Dog",
            visitedTabs: []
        };

        this._onNav = this._onNav.bind(this);
        this._getInfoFromCategories = this._getInfoFromCategories.bind(this);


        // TODO: implement update-tab-on-active-selection

    }

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

        // TODO clear the list of visited tabs
        this.setState(() => ({
            visitedTabs: []
        }));
    };


    render() {
        return (
            <div>
                <Navigation onNav={this._onNav} />
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
                    <Category onChangeValue={this._getInfoFromCategories}/>
                </div>
            </div>
        )
    }

    _onNav(current_view) {
        this.setState(prevState => ({
            view: current_view,
            visitedTabs: [...prevState.visitedTabs, current_view]
        }));
    }
}

export default Display;
