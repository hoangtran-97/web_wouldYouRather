import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
