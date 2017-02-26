import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/app';
import Main from './components/main';
import Random from './components/random';
import AddQuote from './components/add-quote';


import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Random}/>
                <Route path="/add-quote" component={AddQuote}/>
                <Route path="/search" component={Main}/>
            </Route>
        </Router>
    </Provider>
, document.querySelector('.container'));
