import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import moment from 'moment';
import 'moment/locale/tr';
import ReactDisqusThread from "react-disqus-thread";
import $ from "jquery";

import posts from "../../posts.json";

import  "./PostContent.css";

const contentStyle = {
    "fontSize": "15px",
}

export default class PostContent extends Component {

    constructor() {
        super();

        this.state = {
            post: {
                title: "",
                date: "",
                content: ""
            }
        }

    }


    render() {

        return (
            <div>
                <Col lg={9} md={9} sm={12} style={contentStyle} className="post-content">
                    <h2 className="post-title">{this.state.post.title}</h2>
                    <hr/>
                    <p className="post-date"><span className="fa fa-clock-o"></span> {this.state.post.date}</p>
                    <div className="content" dangerouslySetInnerHTML={{__html: this.state.post.content}}/>
                </Col>
                <Col lg={12}>
                    <ReactDisqusThread
                        shortname="alicankustemur-github-io-blog"
                        identifier="alicankustemur-github-io-blog"
                        url="https://alicankustemur-github-io-blog.disqus.com"
                    />
                </Col>
            </div>
        )

    };

    componentWillMount() {
        this.getPostById(this.props.location.query.id);
    }

    componentDidMount() {
        let preElements = document.getElementsByTagName("pre");

        for (let i = 0; i < preElements.length; i++) {

            let preElement = preElements[i];

            let preElementInnerHTML = preElement.innerHTML;


            // find java keywords and colorize
            let javaKeywords = 'abstract assert boolean break byte case catch char class const '
                +          'continue default double do else enum extends '
                +          'false finally final float for goto if implements import '
                +          'instanceof interface int long native new null '
                +          'package private protected public return '
                +          'short static strictfp super switch synchronized this throws throw true '
                +          'transient try void volatile while';

            let javaKeywordsArray = javaKeywords.split(' ');

            for(let i = 0; i < javaKeywordsArray.length; i++){
                let pattern = "\\s"+ javaKeywordsArray[i] +"|" + javaKeywordsArray[i] + "\\s";
                let regex = new RegExp(pattern,"g");
                preElementInnerHTML = this.findAndColorize(preElementInnerHTML,regex,"#EE913A");
            }

            // find annotations and colorize
            let pattern = /@\w+/g;
            // preElementInnerHTML = this.findAndColorize(preElementInnerHTML,pattern,"#BBB529");

            // find strings and colorize
            pattern = /"(.*?)"/g;
            //preElementInnerHTML = this.findAndColorize(preElementInnerHTML,pattern,"#6c975b");

            // find methods and colorize
            pattern = /(\s|[.])\w+!?([(])/g;
            //preElementInnerHTML = this.findMethodsAndColorize(preElementInnerHTML,pattern,"#ffc272");

            // find xml and colorize
            pattern = /&lt;(.*?)&gt;|&lt;\/(.*?)&gt;/g;
            preElementInnerHTML = this.findAndColorize(preElementInnerHTML,pattern,"#e8bf6a");


            preElements[i].innerHTML = preElementInnerHTML;

        }
        // set responsive all post images.
        $(":not(img.logo)img").addClass("img-responsive")
            .css(
                {
                    "width" : "",
                    "height" : "",
                    "display":"block",
                    "margin":"0 auto"
                });

    }

    findAndColorize(str,pattern,color){
        return str.replace( pattern, function replacer(match){
            return "<span style=color:"+ color +">" + match + "</span>";
        } );
    }

    findMethodsAndColorize(str,pattern,color){
        return str.replace( pattern, function replacer(match){
            let bracket = match[match.length - 1];
            match = match.substr(0,match.length - 1);

            let dot = match[0];
            if(dot === '.'){
                match = match.substring(1,match[match.length]);
                return dot + "<span style=color:"+ color +">" + match + "</span>" + bracket;
                // example : method(
                // old     : .method(
            }

            // colorize only method
            let isConstructor = match[1];

            if(isConstructor !== isConstructor.toUpperCase()){
                return "<span style=color:"+ color +">" + match + "</span>" + bracket;
            }else{
                return match + bracket;
            }

        } );


    }

    getPostById(id) {
        posts.forEach((post, index) => {
            if (id === post.id) {
                this.setState({
                    post: {
                        title: post.title,
                        date: this.calculateTime(post.date),
                        content: post.content_full
                    }
                });
            }

        });

    }

    calculateTime(time) {
        moment.locale('tr');
        return moment(new Date(time * 1000), "DD/MM/YYYY HH:").fromNow();
    }


}