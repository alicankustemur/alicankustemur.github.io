import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";


const contactRowList = [
    {
        href: "https://drive.google.com/open?id=0BytHrEwKQAMjZnU2QWNLX3hiMUE",
        icon: "fa-file-pdf-o",
        text: "cv / özgeçmiş"
    },
    {
        href: "https://github.com/alicankustemur",
        icon: "fa-github",
        text: "github.com/alicankustemur"
    },
    {
        href: "mailto:alican.kustemur@gmail.com",
        icon: "fa-envelope",
        text: "alican.kustemur@gmail.com"
    },
    {
        href: "http://linkedin.com/in/alicankustemur",
        icon: "fa-linkedin",
        text: "linkedin.com/in/alicankustemur"
    },
    {
        href: "http://fb.com/alicankustemur",
        icon: "fa-facebook",
        text: "facebook.com/alicankustemur"
    },
    {
        href: "http://twitter.com/alicankustemur",
        icon: "fa-twitter",
        text: "twitter.com/alicankustemur"
    },
    {
        href: "http://instagram.com/alicankustemur",
        icon: "fa-instagram",
        text: "instagram.com/alicankustemur"
    }

];

export default class Contact extends Component {
    render() {
        return (
            <div>
                <a href="" id="contact" style={{"display":"none"}}>contact</a>
                <h5>iletişim</h5>
                <Row>
                    <Col lg={12} className="nopadding">
                        {this.createContractRowList()}
                    </Col>
                </Row>
            </div>
        )
    }

    contactRow(row,index) {

        let iconClassName = "fa " + row.icon +" fa-2x icons";

        return (
            <a href={row.href} className="icon-link" rel="noopener noreferrer" key={index} target="_blank">
                <div className="top5">
                    <i className={iconClassName}></i>
                    <i className="text">{row.text}</i>
                </div>
            </a>
        )
    };

    createContractRowList() {

        let contractRowArray = [];

        contactRowList.forEach((row,index) => {
            contractRowArray.push(
                this.contactRow(row,index)
            );
        });

        return contractRowArray;

    };


}

