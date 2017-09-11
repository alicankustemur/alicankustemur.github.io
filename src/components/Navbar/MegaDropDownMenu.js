import React, {Component} from 'react';
import {hashHistory} from "react-router";
import $ from "jquery";

import "./mega-dropdown-menu.css";


const dropdowns = [
    {
        header: {
            name: "java",
            tags: [
                {
                    name: "java se",
                    link: "javase"
                },
                {
                    name: "servlet",
                    link: "servlet"
                },
                {
                    name: "java server faces",
                    link: "jsf"
                },
                {
                    name: "primefaces",
                    link: "primefaces"
                },
                {
                    name: "spring framework",
                    link: "springframework"
                },
                {
                    name: "hibernate & jpa",
                    link: "hibernatejpa"
                }
            ]

        }
    },
    {
        header: {
            name: "diğer",
            tags: [
                {
                    name: "php",
                    link: "php"
                },
                {
                    name: "jquery",
                    link: "jquery"
                },
                {
                    name: "bootstrap",
                    link: "bootstrap"
                },
                {
                    name: "linux",
                    link: "linux"
                }
            ]

        }
    }
];

export default class MegaDropDownMenu extends Component {


    render() {

        this.dropDown();
        return (
            <li className="dropdown dropdown-slider mega-dropdown">
                <a href="##" className="dropdown-toggle" data-toggle="dropdown">programlama<span
                    className="caret"></span></a>
                <ul className="dropdown-menu dropdown-menu-slider mega-dropdown-menu mega-dropdown-menu-body">
                    {this.dropDown()}
                </ul>
            </li>
        )
    };


    searchByTag(tag) {
        hashHistory.push("/search?tag=" + tag);
        $(".mega-dropdown-menu-body").css("display","none");
    }

    dropDown() {
        let dropDownArray = [];

        dropdowns.forEach((dropdown) => {
            dropDownArray.push(this.createDropDownMenus(dropdown.header.name, dropdown.header.tags));
        });

        return dropDownArray;
    }


    createDropDownMenus(header, tags) {

        let row = [];

        tags.forEach((tag, index) => {
            row.push(<li key={index} style={{ cursor : "pointer" }}  >
                <a onClick={ () => this.searchByTag(tag.link)}>{tag.name}</a>
            </li>);

        });

        return (
            <li key={header} className="col-lg-2">
                <ul>
                    <li key={header} className="dropdown-header">{header}</li>
                    {row}
                </ul>
            </li>
        );
    };

    componentDidMount() {
        $(".dropdown-slider").hover(
            function () {
                $('.dropdown-menu-slider', this).not('.in .dropdown-menu-slider').stop(true, true).slideDown("fast");
                $(this).toggleClass('open');
            },
            function () {
                $('.dropdown-menu-slider', this).not('.in .dropdown-menu-slider').stop(true, true).slideUp("fast");
                $(this).toggleClass('open');
            }
        );

    }

}