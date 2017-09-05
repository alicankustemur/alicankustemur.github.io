import React, {Component} from 'react';
import  $ from "jquery";

import Post from "./Post";

import posts from "../../posts.json";

export default class Content extends Component {

    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                {this.state.posts}
                <div className="post-pagination col-lg-12" style={{"minHeight": "0"}}></div>
            </div>
        )
    };


    componentDidMount() {

        let paginationProps = {
            pageLimit: 5,
            postCount: posts.length,
            pageCount: Math.ceil(posts.length / 5)
        };

        this.createPosts(paginationProps, 1);

        let thiss = this;

        window.jQuery('.post-pagination').bootpag({
            total: paginationProps.pageCount,
            wrapClass: "pagination",
            maxVisible: 7
        }).on("page", function (event, page) {
            thiss.createPosts(paginationProps, page);
        });


        this.setPaginationType();
    }

    createPosts(props, page) {

        let postArray = [];

        let postSize = page * props.pageLimit;

        let currentPostNumber = props.postCount - ( postSize );

        for (var i = (props.postCount - 1); i >= 0; i--) {

            let post = posts[i];

            if (i >= currentPostNumber && i < (currentPostNumber + props.pageLimit)) {
                postArray.push(
                    <Post post={post} key={i}/>
                );
            }

        }

        this.setState({
            posts: postArray
        });

    }

    setPaginationType() {
        if (window.matchMedia('(max-width: 480px)').matches || window.matchMedia('(max-width: 767px)').matches) {
            $(".post-pagination > .pagination").addClass("pagination-sm");
        } else {
            $(".post-pagination > .pagination").removeClass("pagination-sm");
        }
    }


}