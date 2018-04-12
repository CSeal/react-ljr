'use strict';
import React from 'react';
export default function Comment({comment}){
    return (<React.Fragment><h4>{comment.user}</h4><p>{comment.text}</p></React.Fragment>)
}