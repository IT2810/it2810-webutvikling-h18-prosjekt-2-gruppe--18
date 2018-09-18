import React, { Component } from "react";
import Tab from "./Tab";
import Navigation from "./Navigation";
import Category from "./Category";

class Display extends Component {
    constructor() {
        super();
        this.state = {
            view: "tab1",
            textType: null,
            imageType: null,
            soundType: "cat",
        };
        this.oldState = {};

        this._onNav = this._onNav.bind(this);

    }

    _getInfoFromCategories = info => {
        if (info.startsWith("Text")) {
            console.log(info);
            this.setState({textType: info.substring(6, info.length)});
        }
        if (info.startsWith("Image")) {
            console.log(info);
            this.setState({imageType: info.substring(7, info.length)});
        }
        if (info.startsWith("Sound")) {
            console.log(info);
            this.setState({soundType: info.substring(7, info.length)});
        }
    };

    render() {
        return (
            <div>
                <Navigation onNav={this._onNav}/>
                <Category onChangeValue={this._getInfoFromCategories}/>
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
            </div>
        )
    }

    _makeActive() {
        let c_tab = this.state.view;
        for (let i = 1; i < 4 ; i++) {


        }
    }

    _onNav(current_view) {
        this.setState({
            view: current_view
        });
    }

}


export default Display;
