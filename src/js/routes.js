import React, { Component } from 'react';



import App from './App.js';
import login from './login.js';

var BrowserRouter = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link

const Routes = (props) => {
     <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login/:email" component={login} />
    </Router>
}

export default Routes;