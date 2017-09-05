import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

const blogRollRowList = [
    {
        href : "http://www.ozcanacar.com/",
        icon : "fa-code",
        text : "özcan acar"
    },
    {
        href : "http://github.com/heval",
        icon : "fa-github",
        text : "heval berk nevruz"
    },
    {
        href : "http://www.devsniper.com/",
        icon : "fa-code",
        text : "cem ikta"
    }
];


const rowStyle = {
    "marginBottom" : 5
}

export default class Blogroll extends Component {
    render() {
        return (
            <div>
                <a href="" id="blogroll" style={{"display":"none"}}>blogroll</a>
                <h5>blogroll</h5>
                <Row style={rowStyle}>
                    <Col lg={12} className="nopadding" >
                        {this.createBlogroll()}
                    </Col>
                </Row>
            </div>
        )
    }

    row(row,index) {

        let iconClassName = "fa " + row.icon + " fa-2x icons";

        return (
            <a href={row.href} className="icon-link" target="_blank" key={index}
               rel="noopener noreferrer">
                <div className="top5">
                    <i className={iconClassName}></i>
                    <i className="text">{row.text}</i>
                </div>
            </a>
        )
    };

    createBlogroll() {

        let progressBarArray = [];

        blogRollRowList.forEach((row,index) => {
            progressBarArray.push(
                this.row(row,index)
            );
        });

        return progressBarArray;

    };
}