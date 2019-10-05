import React, { Component } from 'react';
import Navbar from './navbar';
import Loginheader from './loginheader';
import ReactDOM, { render } from 'react-dom';
import '../css/header_desktop.css';
import '../css/header_tablet.css';
import '../css/header_mobile.css';
import '../css/App.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Router from 'react-router-dom/Router';

class Header extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          value: 'hello@famousenuf.com',
          obj: 'khkjhkj'
        };


    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
   
      

      handleChange(event) {
        this.setState({value: event.target.value});
        
      }
    
      handleSubmit(event) {
      
        
        alert('Thank you! ..We will get in touch with you via email within 24 hours');
        $.post( "http://52.220.134.160/api/hello", $("#know_more_form").serialize())
        .done(function (formData) {
          console.log("registered succefully",formData);
    
  
        })
        .fail(function (formData) {
          console.log("Signup error", formData);
        });
      }
    render(){
        let route = "/login/:" + this.state.value;
        return(
            
<div className="header" >

                
                    <Navbar/>
                 
                  <div className="famous_top">
                  <div className="famous_man"><div className="header_spaces"></div><div className="parts_bubble"><img className="bubbles" src={require('../images/bubbles.gif')}/>
                  <div className="parts"><img className="bussinesManimg" src={require('../images/BusinessMAn.png')}/><img className="bussinesManimg2" src={require('../images/BusinessManmob.png')}/></div></div>
                  
                  </div>
                  <div className="famous_form">
                   <div className="tagline">
                 Word-of-mouth
marketing<span className="atScale"> at scale</span>
                 </div>
                <form id="know_more_form" className="get_famous_form"  onSubmit={this.handleSubmit} >
             <input type="email"  onChange={this.handleChange}  placeholder="      Enter your email" className="email_enter" name="email" required></input>
             <input type = "number"
      name = "phone"
      ref = "phone_num"
      value="987654321"
      className="inputFieldStyle"
      style = {
        {
          display: 'none',
          fontSize: '12px'
        }
      }
      placeholder = ""
      onChange = {
        this.handleChange
      }
      required/>
            <input  type="submit"  style={{textDecoration: 'none', color: 'white'}} className="button_get_famous" value="Know more"/>
              <img className="man_in_tablet" src={require('../images/BusinessMAn.png')}/>
                  </form>
                
                  </div>
                  <div className="famous_girl_post">
                  <div className="post">
                 
                 

                 
                 
                 
                 
                 
                 
                  <img className="post1" src={require('../images/Post.png')}/>
                  <img className="post1" src={require('../images/Post-1.png')}/>
                  <img className="post1" src={require('../images/Post-2.png')}/>
                  <img className="post1" src={require('../images/Post-3.png')}/>
                    <img className="post1" src={require('../images/Post-1.png')}/>
              
                  </div>
                  <div className="post_tab">
                  <img className="post4" src={require('../images/tpost1.png')}/>
                  <img className="post4" src={require('../images/tpost2.png')}/>
                  <img className="post4" src={require('../images/tpost3.png')}/>
                  <img className="post4" src={require('../images/tpost4.png')}/>
                  <img className="post4" src={require('../images/tpost2.png')}/>
                  </div>
                  <div className="post_mob">
                                    <img className="post2" src={require('../images/mpost1.png')}/>
                  <img className="post2" src={require('../images/mpost2.png')}/>
                  <img className="post2" src={require('../images/mpost3.png')}/>
                  <img className="post2" src={require('../images/mpost4.png')}/>
                  <img className="post2" src={require('../images/mpost2.png')}/>
                          
                  
                  </div>
                  
                  <div className="famous_girl" ><div className="famous_girl_img" ><img className="famous_girl1" src={require('../images/FamousGirl.png')}/><img className="famous_girl2"  src={require('../images/Famousgirlmob.png')}/></div>
                  </div></div>
                  <div className="famous_chik"><div className="header_spaces"></div><div className="parts_bubble"><img className="bubbles" src={require('../images/bubbles2.gif')}/><div className="parts"><img className="bussines_chik" src={require('../images/Hotchick.png')}/></div></div></div>
                  <div className="hotchick_img_mob" ><img className="bubbles" src={require('../images/bubbles2.gif')}/><img className="hotchick_img_oveflow" src={require('../images/HotChickmob.png')}/>
                  </div>
                  </div>
                
        <div className="fbstart">
        <div className="fbstart_div">
        <img className="fbstart_img" src={require('../images/fbstart.png')} alt="image" />
         </div>
        
       
        <div className="fbtext"><span className="fbtextspan">Funded By Facebook FbStart Program</span></div>
        
        </div> 
       
</div>

            
            
            
            
            );
        }
    }

export default Header;