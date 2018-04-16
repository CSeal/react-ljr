import React from "react";
import {render} from "react-dom";
import {articles as articleData} from "./fixtures";
import ArticleList from "./components/ArticleList";
render(<ArticleList articleData={articleData}/>, document.getElementById('container'));