import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import {hashHistory} from "react-router";
import moment from 'moment';
import 'moment/locale/tr';

import "./Post.css";

export default class Post extends Component {

    constructor(){
        super();

        this.state = {
            backgroundColor : "#ffffff"
        }

    }


    render() {
        return (
            <Col lg={9} md={9} sm={8} key={this.props.post.id} className="post-content" onMouseEnter={() => this._onMouseEnter()} onMouseLeave={() => this._onMouseLeave()} style={{ backgroundColor: this.state.backgroundColor }}  >
                <p style={{"fontSize": "13px"}}>
                    <span className="fa fa-clock-o"/> {this.calculateTime(this.props.post.date)}
                </p>
                <h4>{this.props.post.title}</h4>
                <p style={{"fontSize": "14px"}}>
                    <div dangerouslySetInnerHTML={{__html: this.props.post.content_half}}/>
                </p>
                <div className="btn btn-default btn-xs" onClick={ () => this.goToPath("/post?id=" + this.props.post.id)}   style={{ cursor : "pointer"}} >
                    devamını oku ..
                </div>
                <hr/>
            </Col>
        )
    };

    _onMouseEnter = (e) => {
        this.setState({
           backgroundColor : "#e6e6e6"
        });
    }

    _onMouseLeave = (e) => {
        this.setState({
            backgroundColor : "#ffffff"
        });
    }

    goToPath(path){
        hashHistory.push(path);
    }

    calculateTime(time) {
        moment.locale('tr');
        return moment(new Date(time * 1000), "DD/MM/YYYY HH:").fromNow();
    }
}