import React, { Component } from 'react';
import '../css/footer.css';


class Footer extends Component {
    render(){
        return(
            <div className="footer">
            
            <div className="about">
            <ul className=".ul">
            <li className="li">ABOUT</li>
            <li className="listli">Our Mission</li>
            <li className="listli">Company</li>
            <li className="listli">jobs</li>
            <li className="listli">Blog</li>
            </ul>
            </div>
           
            <div className="support">
            <ul className=".ul">
            <li className="li" >SUPPORT</li>
            <li className="listli">FAQ</li>
            <li className="listli">Help Center</li>
            <li className="listli">Terms of Services</li>
            <li className="listli">Privacy Policy</li>
            </ul>
            </div>
            <div className="contact">
            <ul className=".ul">
            <li className="li">CONTACT</li>
            <li className="listli">Email Us</li>
            <li className="listli">Call Us</li>
          
            </ul>
            </div>
          
            <div className="famousenuf">
           <div className="footer_logo"><span className="logo_span"><img className="rectangle" />FAMOUSENUF</span></div>
        <div className="social">
            <ul className="social_networks">
            <li><a href=""><img src={require('../images/tweeter.png')}/></a></li>
            <li><a href=""><img src={require('../images/fb.png')}/></a></li>
            <li><a href=""><img src={require('../images/linkedin.png')}/></a></li>
          </ul>
          </div>
          </div>
            </div>
          
            
            
            
            )
        }
    }
    
    
export default Footer;