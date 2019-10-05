import React, { Component } from 'react';
import Navbar from './navbar';
import Header from './header';
import Banners from './banner_section';
import Footer from './footer';

import '../css/navbar.css';
import '../css/App.css';
import $ from 'jquery';

class App extends Component {
  state = {
    response: ''
  };
  componentWillMount() {
    console.log('mounted');
     $('body').scrollTop(0);
     this.callApi()
     .then(res => this.setState({ response: res.express }))
     .catch(err => console.log(err));
     
   }


  callApi = async () => {
    const response = await fetch('http://52.220.134.160/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
        console.log(body.message);
    return body;
  };
  render() {
    return (
           <div className="App">
           
          <Header/>
          <Banners/>
          </div>
   
    );
  }
}

export default App;
