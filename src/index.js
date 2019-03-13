import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import productReducers from './reducers/productReducers';
import userReducers from './reducers/userReducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

const allReducers = combineReducers({
    products: productReducers,
    user: userReducers
});

const store = createStore(allReducers, {
        products: [{name: 'IPhone'}, {name: 'Google Nexus'}],
        user: 'John Lennon'
    },
    window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
