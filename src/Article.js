"use strict";
import React, {Component} from  "react";
import CommentList from "./CommentList";

export default class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggleArticle(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    getBody(){
     let {isOpen, commentsOpen} = this.state;
     let { text, comments = []} = this.props.article;
        if(!isOpen) return null;
        return <React.Fragment>
                 <section>{text}</section>
                 {(comments.length !== 0)?<CommentList comments={comments}/> : null}
                 <br /><br />
               </React.Fragment>
    };

    render() {
        let {title} = this.props.article;
        return (
            <div>
                <h3>{title}</h3>
                {this.getBody()}
                <button onClick={()=>this.toggleArticle()}>{this.state.isOpen?'close':'open'}</button>
            </div>
        )
    }
}