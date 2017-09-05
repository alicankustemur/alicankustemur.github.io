import React, {Component} from 'react';
import {Col, Row, ProgressBar} from "react-bootstrap";

const progressBarRowList = [
    {
        label: "java se",
        width: 90
    },
    {
        label: "spring framework",
        width: 60
    },
    {
        label: "spring boot",
        width: 40
    },
    {
        label: "jsf & primefaces",
        width: 80
    },
    {
        label: "hibernate & jpa",
        width: 50
    },
    {
        label: "mysql, postgresql",
        width: 70
    },
    {
        label: "jquery & ajax",
        width: 60
    },
    {
        label: "react.js",
        width: 40
    },
    {
        label: "bootstrap",
        width: 70
    },
    {
        label: "git & svn",
        width: 70
    }

];

export default class Skills extends Component {
    render() {
        return (
            <div>
                <a href="" id="skills" style={{"display":"none"}}>skills</a>
                <h5>yetenekler</h5>
                {this.createProgressBar()}
            </div>
        )
    }

    progressBar(row,index) {

        return (
            <Row key={index}>
                <Col lg={4}>
                    {row.label}
                </Col>
                <Col lg={7}>
                    <ProgressBar bsStyle="info" now={row.width}/>
                </Col>
            </Row>
        )
    };

    createProgressBar() {

        let progressBarArray = [];

        progressBarRowList.forEach((row,index) => {
            progressBarArray.push(
                this.progressBar(row,index)
            );
        });

        return progressBarArray;

    };
}