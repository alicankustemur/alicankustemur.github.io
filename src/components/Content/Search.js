import React, {Component} from 'react';
import {Col, FormGroup, FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import TagCloud from "./TagCloud";
import {hashHistory} from "react-router";
import $ from "jquery";

import posts from "../../posts.json";

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tag: this.props.location.query.tag,
            posts: []
        }

    }


    render() {

        return (
            <Col lg={9}>
                <TagCloud onClick={this._tagCloudOnClick} />
                <Col lg={7}>
                    <FormGroup>
                        <FormControl type="text" placeholder="etikete göre ara" name="tag-search" value={this.state.tag}
                                     onChange={this._onChange}/>
                    </FormGroup>
                    <ListGroup>
                        {this.resultList()}
                    </ListGroup>
                </Col>
            </Col>
        )
    };

    _tagCloudOnClick = (tag) => {
       this.getPostByTag(tag.value);
    };


    _onChange = (e) => {
        this.getPostByTag(e.target.value);
    };

    resultRow(post, index) {
        return (
            <ListGroupItem key={index} header={post.title} onClick={ () => this.goToPath("/post?id=" + post.id)}/>
        );
    };

    goToPath(path){
        hashHistory.push(path);
    };

    resultList() {

        let resultRowArray = [];

        if(this.state.posts.length > 0){
            this.state.posts.forEach((row, index) => {
                resultRowArray.push(
                    this.resultRow(row, index)
                );
            });
        }else if(this.state.tag !== ""){
            resultRowArray.push(
                <h4><strong>{this.state.tag}</strong> ile ilgili herhangi bir sonuç bulunamamıştır.</h4>
            );
        }



        return resultRowArray;

    };


    componentDidMount() {
        $(".tag-cloud > span").each((index, value) => {

            let oldFontSize = $(value).css("font-size");

            let fontSize = oldFontSize.substring(0, 2);
            fontSize = parseInt(fontSize, 10) + 5;


            $(value).css({
                 fontSize : fontSize
            });
        });


        this.getPostByTag(this.state.tag);
    }

    componentWillReceiveProps(nextProps){
        this.getPostByTag(nextProps.location.query.tag);
    };


    getPostByTag = (searchTag) => {



        let postArray = [];

        posts.forEach((post, index) => {

            let tags = post.tags.replace(/\s/g, '').split(',');

            searchTag = searchTag.replace(/\s/g, '');

            tags.forEach((tag, index) => {
                if (tag.toLowerCase() === searchTag.toLowerCase()) {
                    postArray.push(post);
                }
            });
        });

        this.setState({
            tag: searchTag,
            posts : postArray
        });
    }

}