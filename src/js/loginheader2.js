import React, { Component } from 'react';
import Navbar from './navbar2';
import '../css/login_tablet.css';
import '../css/login_desktop.css';
import { FormGroup , FormControl ,ControlLabel , HelpBlock } from 'react-bootstrap';
import FormExample from './Form';
import FormExample2 from './Form2';

class Loginheader2 extends React.Component {
    constructor(props) {
    super(props);
    this.formToggle = this.formToggle.bind(this);
    this.state = {
        login : false
        
    }
    
    
    }
    
    
    formToggle(){
        
        this.setState({login : !this.state.login});
            console.log(this.props.match.params.email);
    }

    
    render(){ 
        let form_sections = ['form_sections']; 
        let form_sections2 = ['form_sections2'];
        let Get_demo = ["Get_demo"];
        let login1 = ["login"];
        let login = this.state.login;
        
        if(!login){
            
            form_sections.push('hide');
            form_sections2.push('show');
            Get_demo.push('fd');
            login1.push('show');
            
            
            
        }
        
                return (
          
          <div className="loginheader" >
            
            <Navbar/>
                 <div className="famous_top2">
  
                  <div className="famous_form2">
                  <div className="form_headers">
                  <div className={Get_demo.join(' ')}
                  onClick={this.formToggle}
                  
                  >Get demo</div>
                  <div className={login1.join(' ')}
                  onClick={this.formToggle}
                  >Login</div>
                  
                  
                  </div>
             
       <div className={form_sections.join(' ')}>
       <FormExample/>
      </div>    
      <div className={form_sections2.join(' ')}>
      <FormExample2/>
      </div>
     
                 
                 
      
              </div>
                            <div className="famous_man2"><div className="parts_bubble"></div>
 <div className="parts"><img className="bussinesManimg" src={require('../images/BusinessMAn.png')}/><img className="bussinesManimg2" src={require('../images/BusinessManmob.png')}/></div>
                  </div>
                 
                  <div className="famous_girl_post2">
                  <div className="post">
                  <img className="post1" src={require('../images/Post.png')}/>
                  <img className="post1" src={require('../images/Post-1.png')}/>
                  <img className="post1" src={require('../images/Post-2.png')}/>
                  <img className="post1" src={require('../images/Post-3.png')}/>
                  
                  <img className="post4" src={require('../images/post_tablet.png')}/><img className="post2" src={require('../images/Postmob.png')}/><div className="post3"></div></div>
                  <div className="famous_girl_2" ><div className="famous_girl_img" ><img className="famous_girl1" src={require('../images/FamousGirl.png')}/><img className="famous_girl2"  src={require('../images/Famousgirlmob.png')}/></div>
                  </div></div>
                  <div className="famous_chik2"><div className="parts_bubble"></div> <div className="parts"><img className="bussinesManimg" src={require('../images/Hotchick.png')}/></div></div>
                  <div className="hotchick_img_mob2" ><img className="bubbles" src={require('../images/bubbles2.gif')}/><img className="hotchick_img_oveflow" src={require('../images/HotChickmob.png')}/>
                  </div>
                  </div>
            
            
            </div>
            
            
            
            );
        
        
        
        
    }
    
    
    
    
}


export default Loginheader2;
