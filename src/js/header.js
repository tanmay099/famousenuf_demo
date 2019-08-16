import React, { Component } from 'react';
import Navbar from './navbar';

import '../css/header_desktop.css';
import '../css/header_tablet.css';
import '../css/header_mobile.css';
import '../css/App.css';

class Header extends Component {
    render(){
        return(
            
<div className="header" >

                  <Navbar/>
                  
                 
                  <div className="famous_top">
                  <div className="famous_man"><div className="parts_bubble"><img className="bubbles" src={require('../images/bubbles.gif')}/></div>
                  <div className="parts"><img className="bussinesManimg" src={require('../images/BusinessMAn.png')}/><img className="bussinesManimg2" src={require('../images/BusinessManmob.png')}/></div>
                  
                  </div>
                  <div className="famous_form">
                   <div className="tagline">
                 Word-of-mouth
marketing<span className="atScale"> at scale</span>
                 </div>
                <form className="get_famous_form">
             <input type="text" placeholder="      Enter Your Email" className="email_enter" required></input>
              <button className="button_get_famous" type="submit">Get started</button>
              <img className="man_in_tablet" src={require('../images/BusinessMAn.png')}/>
                  </form>
                
                  </div>
                  <div className="famous_girl_post">
                  <div className="post"><img className="post1" src={require('../images/Post.png')}/><img className="post4" src={require('../images/post_tablet.png')}/><img className="post2" src={require('../images/Postmob.png')}/><div className="post3"></div></div>
                  <div className="famous_girl" ><div className="famous_girl_img" ><img className="famous_girl1" src={require('../images/FamousGirl.png')}/><img className="famous_girl2"  src={require('../images/Famousgirlmob.png')}/></div><div className="hotchick_img" ><img  src={require('../images/Hotchick.png')}/>
                  </div></div></div>
                  <div className="hotchick_img_mob" ><img className="hotchick_img_oveflow" src={require('../images/Hotchick.png')}/>
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