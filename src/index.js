import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './components/Main';
import Search from './components/Content/Search';
import PostContent from './components/Content/PostContent';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
    (<Router history={hashHistory}>
            <Route component={App}>
                <Route path="/" component={Main}/>
                <Route path="/post" component={PostContent}/>
                <Route path="/search" component={Search}/>
            </Route>
        </Router>
    ), document.getElementById('root'));

registerServiceWorker();

