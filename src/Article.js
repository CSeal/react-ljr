"use strict";
import React, {Component} from  "react";
import CommentList from "./CommentList";
/*
export default function Articles(props){
    let {title, text} = props;
    return (
        <div>
            <h3>{title}</h3>
            <section>{text}</section>
        </div>
    )
}*/
export default class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            commentsOpen: false
        }
    }

    toggleArticle(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
        if(this.state.isOpen){
            this.setState({
                commentsOpen: false
            })
        }
    };
    toggleComments(){
        this.setState({
            commentsOpen: !this.state.commentsOpen
        })
    }

    showCommentsBtn(length = 0) {
        const {commentsOpen} = this.state;
        if(length !== 0){
            return <button onClick={()=>this.toggleComments()}>{(commentsOpen)?'close Comments':'show Comments'}</button>
        }
        return null;
    }

    getBody(){
     let {isOpen, commentsOpen} = this.state;
     let {date, text, comments = []} = this.props.article;
        if(!isOpen) return null;
        return (<React.Fragment><section>{text}</section>
            {(commentsOpen)?<CommentList comments={comments} id={date}/> : null}
            {this.showCommentsBtn(comments.length)}<br /><br /></React.Fragment>)
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