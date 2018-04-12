"use strict";
import React from "react";
import Article from "./Article";
export default function ArticleList({articles}){
    let articleElements = articles.map(article => <li key={article.id}><Article article={article} /></li>);
    return (<ul>{articleElements}</ul>)
};
