import React, { Component } from 'react';
import Header from './header';
import Banners from './banner_section';
import Footer from './footer';

import '../css/navbar.css';
import '../css/App.css';

class App extends Component {
  render() {
    return (
           <div className="App">
          <Header/>
          
          <Banners/>
           <Footer/>
           
         
    </div>
   
    );
  }
}

export default App;
