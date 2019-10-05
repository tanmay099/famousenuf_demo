import React, { Component } from 'react';
import '../css/banner_desktop.css';
import '../css/banner_mob.css';
import '../css/banner_tablet.css';
import '../css/faq.css';
import Collapsible from 'react-collapsible';
import Navbar from './navbar4';
import { Link } from 'react-router-dom';
import Footer from './footer';
import $ from 'jquery';


var createReactClass = require('create-react-class');
const Faq = createReactClass({
    getInitialState() {
        return {
        
          close: true,
        };
      },
      handleSubmit(event) {
        alert('Thank you! ..We will get in touch with you via email within 24 hours');
        $.post( "http://52.220.134.160/api/hello", $("#know_more_form4").serialize())
        .done(function (formData) {
          console.log("registered succefully",formData);
        
          
  
        })
        .fail(function (formData) {
        
        });
      },
    componentDidMount () {
        window.scrollTo(0, 0)
      },
      collapsable: function(){
        this.setState({close : !this.state.close});
 
 
     },
    render(){
        let a1 = ["a1"];
        if(!this.state.close){
            a1.push('show');
         

        }
 
        return(
            <div className="faq">
            <Navbar/>
            <div className="faq_main">
            <div className="faqHeader">FamousEnuf Platform Privacy Policy</div>
            <div className="questions" style={{overflow:'scroll' }}>
           
            <div className="a1">At FamousEnuf Technologies Pvt. Ltd ("FamousEnuf", "we", "our" and "us") we are committed to protecting your privacy, and support a general policy of openness about how we collect, use and disclose your personal information.

The purpose of this Privacy Policy is to inform you about FamousEnuf's practices relating to the collection, use and disclosure of personal information that may be provided through access to or use of our websites and/or our mobile application(s) (the "App"), including the website located at http://www.famousenuf.com (collectively referred to as the "Website") as well as our services and related products (collectively referred to as the " Services"), or that may otherwise be collected by us. By using our Services or Website and/or our mobile/web application(s) (the "App"), you consent to the collection, use and disclosure of your personal information (as defined below) in accordance with the following terms and conditions.

This Privacy Policy also explains how you can contact us if you have a question about, want to make a change to or delete any personal information that FamousEnuf may be holding about you. We strongly recommend that you take the time to read this Privacy Policy and retain it for future reference.</div>

             <Collapsible trigger={<div className="q1">Personal Information<i  style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>   
            <div className="a2.show">For the purpose of this Privacy Policy, "personal information" means information about an identifiable individual.</div>
            </Collapsible>
            <Collapsible trigger={<div className="q1">What Personal Information We Collect <i style={{color: '#FFBD2B', fontWeight: 'bold',paddingTop: 5, position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">The personal information we may collect in the course of you accessing or using the Website and/or our mobile application(s) (the "App"), or the Services (including through your initial registration for an account and the subsequent administration of that account) may include, but is not limited to, the following:
 
Contact information (such as name, address, postal code, e-mail address and telephone number);
Social media profile information (such as username and other profile data);
Financial and billing information (such as credit card number and expiration date);
Demographic information (such as gender, age and occupation) and information about individual preferences; and
Personal information, including the information you may transmit to us or authorize us to obtain from you or a third party in connection with the Services ("Customer Data").</div>
</Collapsible>
<Collapsible trigger={   <div className="q1">How We Use Your Personal Information <i style={{color: '#FFBD2B', fontWeight: 'bold',paddingTop: 5, position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">We use your personal information to:

Provide you with personalized Services and a personalized experience on our Website and/or our mobile application(s) (the "App") and interactive communication;
Provide you with timely and reliable Services;
Do all the things necessary to administer those Services and the Website and/or our mobile application(s) (the "App");
Research, develop, manage, protect and improve those Services and the Website and/or our mobile application(s) (the "App");
Advise you about new products and services that may be of interest to you;
Develop and maintain our relationship with you and communicate with you;
Bill you for our Services; and
Collect outstanding debts.</div>
</Collapsible>

<Collapsible trigger={<div className="q1">When We Disclose Your Personal Information<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">Except with your consent, we will not sell, license, trade or rent your personal information to or with others.

            FamousEnuf may share personal information with third parties engaged to assist us in providing the Services to you or to carry out one or more of the purposes described above. These service providers are prohibited from using your personal information for any purpose other than to provide this assistance and are required to protect personal information collected by them on behalf of FamousEnuf or disclosed to them by FamousEnuf and to comply with the general privacy principles described in this Privacy Policy.
            
            FamousEnuf reserves the right to disclose personal information to a third party if a law, regulation, search warrant, subpoena or court order legally requires or authorizes us to do so.
            
            FamousEnuf also reserves the right to disclose and/or transfer personal information to a third party in the event of a proposed or actual purchase, sale (including a liquidation, realization, foreclosure or repossession), lease, merger, amalgamation or any other type of acquisition, disposal, transfer, conveyance or financing of all or any portion of FamousEnuf or of any of the business or assets or shares of FamousEnuf or a division thereof in order for you to continue to receive the same products and services from the third party.</div>
            </Collapsible>
            <Collapsible trigger={    <div className="q1">Knowledge and Consent <i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons" >add</i></div>}>
            <div className="a2.show"  >FamousEnuf collects personal information about you, from you, or from third parties you authorize us to collect such information from, only when you voluntarily provide it or authorize us to collect it. Typically, we will seek consent for the use or disclosure of your personal information at the time of collection. In certain circumstances, consent may be sought after the information has been collected but before use (for example, when we want to use information for a purpose not previously identified).

            The form of consent that we seek, including whether it is express or implied, will largely depend on the sensitivity of the personal information and the reasonable expectations of the individual in the circumstances.
            
            You may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice. If you wish to withdraw your consent at any time, please contact us using the contact information provided in the "Contact Us" section of this Privacy Policy. We will inform you of the implications of withdrawing consent. We will not, as a condition of the supply of a product or service, require you to consent to the collection, use or disclosure of information beyond that required to fulfill the explicitly specified and legitimate purposes for which the information is being provided.</div>   
            </Collapsible> 
            <Collapsible trigger={    <div className="q1">Use or Disclosure for Marketing Purposes <i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">f you have not opted out of receiving marketing materials, we may also use (but will not disclose) your personal information to promote and market additional goods, services and special offers from us, our affiliates and/or our business associates, including by means of direct marketing. We may also disclose your name and mailing address to these affiliates and/or third party business associates so that they can send you promotional materials directly.

            You can choose not to allow us to use or disclose your personal information for direct marketing purposes by indicating your preference on the user settings page or by contacting us as outlined below (see "Contacting Us").</div>   
            </Collapsible> 
            <Collapsible trigger={  <div className="q1">Cookies<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">When you visit our website, we place a text file called a "cookie" in the browser directory of your computer's hard drive. A cookie is a small piece of information that a website can store on your web browser and later retrieve. The cookie cannot be read by any website other than the one that set up the cookies. Some browsers can be set to reject all cookies. If you choose to modify your browser in this manner, some pages of this website may not function properly.

            We also use cookies and work with third party service providers who use cookies to collect traffic data and other information about your use of our Website and/or our mobile application(s) (the "App"). We and our service providers use this information in aggregated and anonymous form to analyze usage of our Website and to improve the operation of our Website and/or our mobile application(s) (the "App"), Services and business generally.</div>   
          </Collapsible> 
          <Collapsible trigger={   <div className="q1">How We Protect Your Personal Information<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">FamousEnuf makes commercially reasonable efforts to ensure that personal information collected in the course of you accessing or using the Website or the Services is protected against loss, theft and unauthorized access. This protection applies in relation to information stored in both electronic and hard copy form. Access to such personal information is restricted to selected employees or representatives.</div>   
            </Collapsible>
            <Collapsible trigger={ <div className="q1">Links to Third Party Sites<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">This website and/or our mobile application(s) (the "App") may offer links to other third party websites. You should be aware that operators of linked websites may also collect your personal information (including information generated through the use of cookies) when you link to their websites. FamousEnuf is not responsible for how such third parties collect, use or disclose your personal information, so it is important to familiarize yourself with their privacy policies before providing them with your personal information.</div>   
            </Collapsible>
            <Collapsible trigger={  <div className="q1">Retention and Storage of Your Personal Information
<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons" >add</i></div>}>
            <div className="a2.show">FamousEnuf retains your personal information for as long as necessary to fulfill the purpose(s) for which it was collected and to comply with applicable laws, and your consent to such purposes(s) remains valid after termination of our relationship with you.

For the purposes set out in this Privacy Policy, we or one of our affiliates or an unaffiliated service provider may process and store your personal information outside of the province in which you reside and/or outside of India, and under the laws of those other jurisdictions, in certain circumstances courts, law enforcement agencies, regulatory agencies or security authorities in those other provinces or foreign jurisdictions may be entitled to access your personal information.</div>   
 </Collapsible>
 <Collapsible trigger={<div className="q1">Changes to this Privacy Policy}

<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">FamousEnuf reserves the right to modify this Privacy Policy at anytime without notice to reflect changes in legal or regulatory obligations or changes in the manner in which we deal with personal information. The Privacy Policy posted at any time or from time to time via this website shall be deemed to be the Privacy Policy then in effect.</div> 
            </Collapsible>
            <Collapsible trigger={   <div className="q1">Correcting or Updating Your Information


<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">You can help us maintain the accuracy of your personal information by notifying us of any changes to this information. You may contact FamousEnuf to request access to or correction or update of your personal information using the contact information provided in the "Contact Us" section of this Privacy Policy.</div> 
            </Collapsible>
            <Collapsible trigger={   <div className="q1">Contacting Us


<i style={{color: '#FFBD2B', fontWeight: 'bold', position: 'absolute'}} class="material-icons">add</i></div>}>
            <div className="a2.show">In the event that you have any questions about FamousEnuf 's Privacy Policy or if you have reason to believe that FamousEnuf may have failed to adhere to this Privacy Policy, you may contact us at:

E-mail: hello@famousenuf.com</div> 
</Collapsible>
            </div>
            </div>
            
            
        
                  <div className="subscribe_banner">
            <div><span className="subscribe_banner_text">Let your customers tell your story.

            </span></div>
            <div><div className="span_text">
Because, they do it best.
</div></div>
          <div>
          <form id="know_more_form4"className="form"  onSubmit={this.handleSubmit} >
          <input type="email"  onChange={this.handleChange}  placeholder="      Enter your email" className="search" name="email" required></input>
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
         <input  type="submit"  style={{textDecoration: 'none', color: 'white'}} className="button" value="Sign up"/>
         </form>
                  </div>
            </div>
            <Footer/>
            
            </div>
            
            );
        }
    
});

export default Faq;