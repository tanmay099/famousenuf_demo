import React, { Component } from 'react';

import '../css/navbar.css'



class Navbar extends  React.Component {

    
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            collapse: false
        }
      }
      
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      };
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      };
      
      handleScroll(event) {
        console.log('the scroll things', event)
        this.setState({collapse: true});
        console.log();

      };
	


    render(){
        let simplelist = ["simple-list li"];
let collapse = this.state.collapse;
console.log(collapse);
        if(collapse){

            simplelist.push('collapsed');
        }
        return(
 <div className="wrapper">
        <div className="navigation">
        <div className="navbar_1">
          <div className="logo">
          <img className="App-logo" />
          <div className="title_div">FAMOUSENUF</div>
          </div>
          </div>
         <div className="navbar">
         <div class="navbar_space1"></div>
              <ul className={simplelist.join(' ')}>
          <li className="li.collapsed"><a href="#">Home</a></li>
          <li className={"li"}><a href="#">How it Works</a></li>
          <li className={""}><a href="#">Blog</a></li>
          <li className={""}><a href="#">Login</a></li>
          <li className="five"><span>Sign Up</span></li>
     
             </ul>
             <div className="navbar_space2"></div>
          </div>
        </div>
</div>
    );
}
    
}
export default Navbar;