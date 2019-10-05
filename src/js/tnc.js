import React, { Component } from 'react';
import '../css/banner_desktop.css';
import '../css/banner_mob.css';
import '../css/banner_tablet.css';
import '../css/faq.css';
import ReactDOM from 'react-dom';
import Navbar from './navbar4';
import Footer from './footer';
import $ from 'jquery';
import { Link } from 'react-router-dom';



var createReactClass = require('create-react-class');
const Tnc = createReactClass({

    componentDidMount () {
        window.scrollTo(0, 0)
      },


    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0
      },
      
      handleSubmit(event) {
        alert('Thank you! ..We will get in touch with you via email within 24 hours');
        $.post( "http:///52.220.134.160/api/hello", $("#know_more_form5").serialize())
        .done(function (formData) {
          console.log("registered succefully",formData);
        
          
  
        })
        .fail(function (formData) {
        
        });
      },
  
    
    render(){
   
        return(
            <div className="faqs">
            <div className="faq">
            <Navbar/>
            <div className="faq_main">
            <div className="faqHeader">Terms and conditions</div>
            <div className="questions" style={{overflow:'scroll' }}>
            
          
            <div className="a1">This is an agreement between you and FamousEnuf Technologies Pvt. Ltd. ("we," "us," or "our"). By clicking on the "I Agree" button, you acknowledge that you have authority to enter this agreement and that you have read it, understand it and agree to be bound by its terms and conditions.</div>
             <div className="q1">FAMOUSENUF PLATFORM
           </div>
            <div className="a1">Subject to the Terms of Service set forth below (as amended from time to time, the "Terms of Service") you will be granted access to the FamousEnuf platform (the "Platform") through our website, www.FamousEnuf.com (the "Website") and/or our mobile/web application(s) (the "App"). We reserve the right at any time, with or without notice to you, to modify the Platform and its features. In order to access the Platform, you will be required to establish an account by registering through our Website or our App. You agree to provide accurate, current and complete information about yourself as prompted by the registration form. Registration data and other information about you are governed by our Privacy Policy. You are responsible for keeping your password secret and secure. You must immediately notify us of any unauthorized use of your password or account or any other breach of security of which you become aware. To the extent you access the Platform through a mobile device, your wireless service carrier's standard charges, data rates and other fees may apply. Some or all of the Platform's functionality may not work with all carriers or mobile devices. By accessing the Platform on a mobile device, you agree that we may communicate with you by notifications, text message or other electronic means to your mobile device and that certain information about your usage of the Platform through the mobile device may be communicated to us. You must be at least 18 years old to use the Platform.</div>
             <div className="q1">SOCIAL MEDIA</div>
            <div className="a1">In order to use the Platform, you may be required to register and log in with one or more social media service providers, such as Facebook, Twitter, Instagram etc. You will provide your login information, like your password, directly to such social media service providers, and not to us. The social media service providers may grant us access to certain information provided by you, and we will use, store and disclose such information in accordance with our Privacy Policy. We are not responsible for any action taken by social media service providers, or the accuracy or availability of any information provided by social media service providers.</div>
             <div className="q1">USER CONDUCT </div>
            <div className="a1">You are responsible for your conduct and any data, text, files, video, images, information, software, music, sound, photographs, graphics, messages or other materials (collectively, "content") that you upload, share, post, submit, publish, send, display or transmit (hereinafter, "transmit") via the Platform. You agree not to use the Platform to:

            transmit content in any manner that infringes any intellectual property or other proprietary rights of any party;
            
            transmit content that is unlawful or promotes unlawful activity or provides instructional information about unlawful activities, or that is harmful, threatening, abusive, harassing, inflammatory, tortious, excessively violent, defamatory, vulgar, obscene, pornographic, sexually suggestive, libelous, invasive of another's privacy (or creates a privacy or security risk to any person), or hateful racially or ethnically;
            
            traakbsbhj9fcf82.cwljn9tsgn5y.ap-southeast-1.rds.amazonaws.com
ansmit content that constitutes unsolicited or unauthorized advertising or promotional materials or commercial activities;
            
            impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;
            
            transmit any software viruses, spyware, worms, malware or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or other equipment; or
            
            violate any applicable local, state, national or international law or regulation or judicial or administrative order.
            
            We reserve the right, for any reason or no reason, to remove from the Platform any content posted by you. At our request, for any reason or no reason, you will promptly remove any content pertaining to the Platform that is posted in social media.</div>
<div className="q1">BRAND CAMPAIGNS </div>
            <div className="a1">You may have the opportunity to participate in Brand campaigns coordinated through the Platform. If you indicate interest in participating in one or more Brand campaigns, we will be authorized to provide the applicable potential brands with some or all of the following information concerning you:

your name and social media identification;

contact information;

sizing, product preferences, and biographical information (if applicable)

If you are selected by a brand to participate in the campaign, you will be given access to a campaign brief through the Platform, created by the brand, which includes additional parameters, specifications, terms and conditions applicable to the campaign (“Brief”). The contents of the Brief and any information related to the brand or the Brief are confidential and you will not disclose such contents or information to any third party except as permitted in the Brief. If you desire to accept the terms and conditions set forth in the Brief, you will acknowledge your acceptance through the Platform and such terms and conditions will be binding and incorporated into this agreement for all purposes. You will abide by the parameters, specifications, terms and conditions set forth in any Brief accepted by you, including but not limited to required social media tags and disclosures (“Required Tags”) and required photo review and approval by the Brand before transmitting content (“Photo Review”). You will not post any content through the Platform or social media that is disparaging to the brand or the brand's products or services. If the Brief requires Photo Review by the Brand, then Brand shall have the sole discretion to accept or reject your submitted content. Your content will not be transmitted without prior Brand approval and may be removed at any time. You shall only be compensated for content that is accepted by Brand for transmitting, provided you are in compliance with FamousEnuf’s Terms of Service and the terms set forth in the Brief. In addition to other Required Tags specified by the Brand, you shall disclose your connection to Brand in each post by including the hashtag #AD. Unless specifically provided in the Brief or by a FamousEnuf team member, you will not contact any brand directly concerning any campaign, and you must communicate exclusively through the Platform.</div>
<div className="q1">INTELLECTUAL PROPERTY RIGHTS</div>
<div className="a1">You have no rights in any of our copyrights, patents, trademarks, trade secrets or other proprietary rights, except to the extent necessary to access and use the Platform as contemplated under this agreement. The technology and software underlying the Platform is our property. You agree not to copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sublicense, or otherwise transfer any right in our technology or software. You will not upload, transfer or post any content that you did not create or that you do not own all right, title and interest in and to, including, without limitation, all copyright and rights of publicity contained therein. You hereby grant to us, and any applicable brand in connection with a branded campaign in which you participate, a nonexclusive, worldwide, royalty free, fully paid up, transferable, sublicensable, perpetual, irrevocable license to copy, display, upload, distribute, store, modify and otherwise use any content that you upload, transfer or post through the Platform. To the extent that any content you transmit on the Platform contains an image of another person, you agree to obtain from such person a written release and authorization to use and publish such image, which written release and authorization will be in form and substance acceptable to FamousEnuf. You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information about the Platform ("Submissions"), provided by you to us are non-confidential and we will be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.</div>
<div className="q1">INDEMNITY AND RELEASE</div>
<div className="a1">You agree to defend (at our request), release, indemnify and hold us and our affiliates and our respective officers, employees, managers, directors and agents harmless from and against any and all claims, liabilities, damages, losses and expenses, including reasonable attorneys' fees and costs, arising out of or relating to your use of the Platform, any of your content, your violation of these Terms of Service or your violation of any rights of another.</div>
<div className="q1">DISCLAIMER OF WARRANTIES</div>
<div className="a1">YOUR USE OF THE PLATFORM IS AT YOUR SOLE RISK. THE PLATFORM PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM, TO THE FULLEST EXTENT PERMISSIBLE BY LAW, ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT (I) THE PLATFORM WILL MEET YOUR REQUIREMENTS, (II) ACCESS TO THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR (III) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL OBTAINED BY YOU THROUGH THE PLATFORM WILL MEET YOUR EXPECTATIONS..</div>
<div className="q1">LIMITATION OF LIABILITY</div>
<div className="a1">YWE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE. IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR DAMAGES, LOSSES OR CAUSES OF ACTION EXCEED FIVE HUNDRED RUPEES(Rs.500).</div>
<div className="q1">MODIFICATIONS</div>
<div className="a1">We reserve the right, at our sole discretion, to change or modify these Terms of Service at any time without further notice. It is your responsibility to periodically review these Terms of Service so you are aware of any revision to which you are bound. The updated Terms of Service shall be effective upon posting, unless specified otherwise. If you do not agree to abide by these or any future Terms of Service, do not continue to use the Platform.

</div>
<div className="q1">TERMINATION</div>
<div className="a1">We may suspend, discontinue or terminate your access to the Platform at any time. If we suspend, discontinue or terminate your access to the Platform, or if you deactivate your account, your content and all other data and statistics may no longer be accessible to you through social media or otherwise. We have no responsibility or liability for the deletion or failure to store any data or other content uploaded through the Platform.

</div>
<div className="q1">MISCELLANEOUS</div>
<div className="a1">These Terms of Service constitute the entire agreement between you and us and supersede any prior agreements between you and us with respect to the subject matter herein. These Terms of Service shall be governed and construed in accordance with the laws of India. Subject to arbitration and subject to other applicable provisions of this Agreement, if any dispute arising in respect of the understanding/obligations/rights specified herein shall be subject to the exclusive jurisdiction of the courts in Bangalore only. Our failure to exercise or enforce any right or provision of these Terms of Service will not constitute a waiver of such right or provision. If any provision of these Terms of Service is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of these Terms of Service remain in full force and effect. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Platform or these Terms of Service must be filed within one (1) year after such claim or cause of action arose or be forever barred. A printed version of this agreement and of any notice given in electronic form will be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. The section titles in these Terms of Service are for convenience only and have no legal or contractual effect. All other Terms of Service that applies to FamousEnuf Technologies Pvt. Ltd. shall also apply to Brand, including but not limited to the Indemnity and Release, Disclaimer of Warranties and Limitation of Liability provisions set forth in the Terms of Service.</div>
<div className="q1">Questions? Concerns? Suggestions?</div>
<div className="a1">Please contact us at hello@famousenuf.com to report any violations of these Terms of Service or to pose any questions regarding this Terms of Service..</div>

            
            
            </div>
          
            
            </div>
            <div className="subscribe_banner">
            <div><span className="subscribe_banner_text">Let your customers tell your story.

            </span></div>
            <div><div className="span_text">
Because, they do it best.
</div></div>
          <div>
          <form id="know_more_form5"className="form"  onSubmit={this.handleSubmit} >
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

               
          
            </div>
            
            );
        }
    
});

export default Tnc;