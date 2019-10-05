import React, { Component } from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';


class Footer extends Component {
    
    handleSubmit() {
        
        // Scroll to the top of the page to show the status message.
        
        // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
      }
    render(){
        return(
            <div className="footer">
            
            <div className="about">
                  <ul className="social_networks2">
                  <li><a href="https://twitter.com/FamousEnuf?lang=en" target="_blank"><img src={require('../images/tweeter.png')}/></a></li>
                  <li><a href="https://www.facebook.com/famousenuf/?ref=aymt_homepage_panel" target="_blank"><img src={require('../images/fb.png')}/></a></li>
                  <li><a href="https://www.linkedin.com/company/famousenuf?trk=top_nav_home" target="_blank"><img src={require('../images/linkedin.png')}/></a></li>
          </ul>
      
            </div>
           
            <div className="support">
            <ul className=".ul">
           
            <li className="listli"><Link style={{color: 'white',textDecoration: 'none', display: 'none'}} to="/faq">FAQ</Link></li>
          
            <li className="listli"><Link onClick={this.handleSubmit} style={{color: 'white', textDecoration: 'none'}} to="/tnc">Terms of Services</Link></li>
            <li className="listli"><Link style={{color: 'white',textDecoration: 'none'}} to="/faq">Privacy Policy</Link></li>
            </ul>
            </div>
            <div className="contact">
            <ul className=".ul">
          
            <li className="listli">Contact Us </li>
            <li className="listli">hello@famousenuf.com</li>
          
            </ul>
            </div>
          
            <div className="famousenuf">
           <div className="footer_logo"><span className="logo_span"><a href="http://famousenuf.com">FAMOUS<span id="logo_color">ENUF</span></a></span></div>
        <div className="social">
            <ul className="social_networks">
            <li><a href="https://twitter.com/FamousEnuf?lang=en" target="_blank"><img src={require('../images/tweeter.png')}/></a></li>
            <li><a href="https://www.facebook.com/famousenuf/?ref=aymt_homepage_panel" target="_blank"><img src={require('../images/fb.png')}/></a></li>
            <li><a href="https://www.linkedin.com/company/famousenuf?trk=top_nav_home" target="_blank"><img src={require('../images/linkedin.png')}/></a></li>
          </ul>
          </div>
          </div>
            </div>
          
            
            
            
            )
        }
    }
    
    
export default Footer;