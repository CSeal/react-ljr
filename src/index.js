import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';

import {getStore} from './store';
import App from "./App";
const store = getStore();
render(<Provider store={store}>
            <App/>
        </Provider>, document.getElementById('container'));

