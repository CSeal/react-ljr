'use strict';
//import React,{Component} from "react";
import React from "react";
import Comment from "./Comment";

/*export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render(){
        const {comment} = this.props;
    }
}*/

export default function CommentList({comments, id}){
    let commentElements = comments.map(commentData=><li key={commentData.id}><Comment comment={commentData}/></li>);
    return (<ul>
        {commentElements}
            </ul>);
}
