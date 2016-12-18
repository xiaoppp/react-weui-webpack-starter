import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Route, Router, IndexRedirect, IndexRoute, browserHistory, hashHistory} from 'react-router'
import FastClick from 'fastclick'

//引入样式库
import 'weui';
import 'react-weui/lib/react-weui.min.css'

import IndexView from './views/index'
import InfoView from './views/info_edit'
import DetailView from './views/detail_edit'

class App extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'}}>
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
}

window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={IndexView}/>
            <Route path="info" component={InfoView}/>
            <Route path="detail" component={DetailView}/>
        </Route>
    </Router>
), document.getElementById('container'))
