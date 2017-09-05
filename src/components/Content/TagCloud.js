import React,{Component} from "react";
import { TagCloud } from "react-tagcloud";

import posts from "../../posts.json";

const tagss = [];

export default class TagCloudComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tag : ""
        }
    }

    render(){
        return (
            <TagCloud minSize={12}
                      maxSize={35}
                      tags={this.tags()}
                      onClick={this.props.onClick.bind(this)}
                      style={{cursor : "pointer"}}
            />
        );
    };

    tags = () => {

        var tagMap = new Map();

        posts.forEach((post, index) => {

            let tags = post.tags.split(',');

            tags.forEach((tag, index) => {

                if (tagMap.get(tag) == null) {
                    tagMap.set(tag, 20);
                } else {
                    let count = tagMap.get(tag);
                    tagMap.delete(tag);
                    tagMap.set(tag, (count + 1));
                }

            });

        });

        tagMap.forEach((value, key) => {

            tagss.push({
                value: key,
                count: value
            });

        });

        return tagss;
    }


}

