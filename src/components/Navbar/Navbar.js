import React, {Component} from 'react';
import {Navbar, Nav, NavItem, FormGroup, FormControl} from "react-bootstrap";
import {hashHistory} from "react-router";
import $ from "jquery";

import "./search.css";
import "./Navbar.css";
import posts from "../../posts.json";
import MegaDropDownMenu from "./MegaDropDownMenu";

export default class NavbarComponent extends Component {

    render() {
        return (
            <Navbar bsStyle="default" className="col-lg-9 col-md-9 col-sm-12">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="http://whoismrrobot.com" target="_blank" rel="noopener noreferrer"> ~
                            whoismrrobot</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="" onClick={this.props.goToPath.bind(this, "/")}>ana
                            sayfa</NavItem>
                        <MegaDropDownMenu/>
                    </Nav>
                    <Navbar.Form>
                        <FormGroup>
                            <FormControl className="search input-sm" placeholder="Ara" style={{ float : "right", "padding-right" : "25px" }}  />
                        </FormGroup>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    componentDidMount() {
        this.search();
    }

    search() {
        let source = [];

        posts.forEach((post, index) => {
            source.push({
                label: post.title,
                link: '/post?id=' + post.id
            })
        });

        window.jQuery(".search").autocomplete({
            source: source,
            select(e, ui){
                hashHistory.push(ui.item.link);
            },
            search(e, ui){
                hashHistory.push("");
            },
            close(e, ui){
                $(".search").val("");
            }
        });

    }
}