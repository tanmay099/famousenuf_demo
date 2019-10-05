import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , HashRouter, Route, Link, Switch} from 'react-router-dom';

import './css/index.css';
import Tnc  from './js/tnc.js'
import App from './js/App';
import Loginheader from './js/loginheader';
import Loginheader2 from './js/loginheader2';
import Faq from './js/FAQ.js';


import registerServiceWorker from './registerServiceWorker';


const  Main = () => (
            <HashRouter>
         <Switch>
         <Route exact path='/' component={App}/>
         <Route path ='/login' component={Loginheader2}/>
         <Route path ='/signup/:email' component={Loginheader}/>
         <Route path = '/faq' component={Faq}/>
           <Route path = '/tnc' component={Tnc}/>
         </Switch>
         </HashRouter>
    
    );




ReactDOM.render(<Main/>, document.getElementById('root'));
//  registerServiceWorker();
