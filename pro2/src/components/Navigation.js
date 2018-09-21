import React, { Component } from "react";

/**
 * This component takes care of the navigation
 * between the different tabs.
 */
class Navigation extends Component {
    constructor(props) {
        super(props);

        this._nav = this._nav.bind(this);
    }

    /**
     * Opens up the side bar when one presses the hamburger-button.
     * @param e
     */
    openNav = e => {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "250px";
    };


    render() {
        return (
            <React.Fragment>
                <div id="navBar">
                    <ul>
                        <li>
                            <a href={null}
                               id="tab1"
                               onClick={this.props.onNav.bind(null, this._nav("tab1"))}>
                                Tab 1
                            </a>
                        </li>
                        <li>
                            <a href={null}
                               id="tab2"
                               onClick={this.props.onNav.bind(null, this._nav("tab2"))}>
                                Tab 2
                            </a>
                        </li>
                        <li>
                            <a href={null}
                               id="tab3"
                               onClick={this.props.onNav.bind(null, this._nav("tab3"))}>
                                Tab 3
                            </a>
                        </li>
                        <li>
                            <a href={null}
                               id="tab4"
                               onClick={this.props.onNav.bind(null, this._nav("tab4"))}>
                                Tab 4
                            </a>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
                <span id="sidenavOpenBtn" onClick={this.openNav}>&#9776; </span>
            </React.Fragment>
        );
    }

    /**
     * Returns the view. Used for simplifying the navigation part.
     * @param view
     * @returns {*}
     * @private
     */
    _nav(view) {
        return view;
    }
}

export default Navigation;
