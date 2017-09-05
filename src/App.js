import React, {Component} from 'react';
import {hashHistory} from "react-router";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

import logo from "./logo.png";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const homeTitle = "ali can kuştemur | bir programcının hayal dünyası";

class App extends Component {

    render() {

        return (
            <div>
                <LeftSidebar goToPath={this.goToPath} logo={logo}/>
                <Navbar goToPath={this.goToPath}/>
                {this.props.children}
                <a className="to-top" style={{display:"none"}}>yukarı &uarr;</a>
                <Footer goToPath={this.goToPath} logo={logo}/>
            </div>
        );
    }

    goToPath(path) {
        hashHistory.push(path);

        if (!window.location.href.includes("loaded")) {
            document.title = homeTitle;
        }

    };

}
export default App;
