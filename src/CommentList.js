'use strict';
import React,{Component} from "react";
import Comment from "./Comment";

export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleComments(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody(){
        const {comments = []} = this.props;
        const {isOpen} = this.state;
        const commentsElement = comments.map(commentData=><li key={commentData.id}><Comment comment={commentData}/></li>);
        if(!isOpen || commentsElement.length === 0) return null;
        return (<ul>
                {commentsElement}
                </ul>)
    }
    getButton(){
        const {isOpen} = this.state;
        return <button onClick={()=>this.toggleComments()}>{(isOpen)?'close Comments':'show Comments'}</button>
    }

    render(){
        const {isOpen} = this.state;
        return (<React.Fragment>
                    {this.getBody()}
                    {this.getButton()}
               </React.Fragment>)
    }
}
