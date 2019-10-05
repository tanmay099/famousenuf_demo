import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login_desktop.css';
import '../css/login_tablet.css';
import '../css/login_mobile.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import LoadingIndicater from './indicater.js';


import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button
} from 'react-bootstrap';
import { spawn } from 'child_process';

var createReactClass = require('create-react-class');
const FormExample = createReactClass({
  getInitialState() {
    return {
      value: '',
      signup: false,
      loading: true,
    };
  },
  state: {
    response: ''
  },

  

    



  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  },


  handleChange({target}){
    this.props.handleChangeShow(this.state.value)
},


  handleSubmit: function (event) {
      event.preventDefault();
      console.log('i called');
      // Scroll to the top of the page to show the status message.
      // console.log(ReactDOM.findDOMNode(this.name.username).value);
      this.setState({
        type: 'info',
        message: 'Sending...'
      }, this.sendFormData);
      setTimeout(() => this.setState({signup : true }), 5000)
      this.setState({ signup :false});
      setTimeout(() => this.setState({ loading: false }), 100)
    }


    ,
  sendFormData: function () {
    // Prepare form data for submitting it.
  
   
    var data = "lala"
    $.post( "http://52.220.134.160/api/hello", $("#signup-form").serialize())
      .done(function (formData) {
        console.log("registered succefully",formData);
        setTimeout(() => this.setState({ loading: false }), 100)

      })
      .fail(function (formData) {
        console.log("Signup error", formData);
      });


  },
  signup: function(){
    this.setState({signup :true});
   },
  requestBuildQueryString: function (params) {
    var queryString = [];
    for (var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  },
  callApi: async() => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
console.log(body.express);
    return body;
  },
  render() {
    const { loading } = this.state;
    let spinner= ["spinner"];
    let  tablet_form = ["tablet_form"];
    let SignupForm = ["SignupForm"];
    let button_get_demo = ["button_get_demo"];
    let form_headers = ["form_headers"];

    if(this.state.signup){
  spinner.push('show');
  button_get_demo.push('hide');
      
     

  }
  if(!this.state.loading){
   spinner.pop('show');
   tablet_form.push('hide');
   SignupForm.push('show');
   form_headers.push('hide');


  }
    
    return ( <Form >
      <form id = "signup-form"
     
      onSubmit = {
        this.handleSubmit}
      className = {tablet_form.join(' ')}

      validationState = {
        this.getValidationState()
      } >
      <div >
      <ControlLabel style = {
        {
          fontSize: '12px'
        }
      }
      className = "input_style2">
     Brand name </ControlLabel> <input style = {
        {
          fontSize: '12px'
        }
      }
      className="inputFieldStyle"
      placeholder = ""
      name = "brand_name"
      type = "text"
      required/>

      <FormControl.Feedback/>
      </div> <div >
      <ControlLabel style = {
        {
          fontSize: '12px'
        }
      }
      className = "input_style" >Name</ControlLabel> <input style = {
        {
          fontSize: '12px'
        }
      }
      className="inputFieldStyle"
      placeholder = ""
      name = "name"
      type = "text"
      
      required/>

      <FormControl.Feedback/>
      </div> <div>
      <ControlLabel style = {
        {
          fontSize: '12px'
        }
      }
      className = "input_style"> Email ID</ControlLabel>

      <input style = {
        {
          fontSize: '12px'
        }
      }
      className="inputFieldStyle"
      placeholder = ""
      name = "email"
      ref = "email"
      type = "email"
    


      required/>

      <FormControl.Feedback/>
      </div> <div>
      <ControlLabel style = {{
          fontSize: '12px'
        }
      }
      className = "input_style" > Phone number </ControlLabel>
       <input type = "number"
      name = "phone"
      ref = "phone_num"
      className="inputFieldStyle"
      style = {
        {
          fontSize: '12px'
        }
      }
      placeholder = ""
      onChange = {
        this.handleChange
      }
      required/>

      <FormControl.Feedback/>
      </div> <div>
      <div className={spinner.join(' ')}>
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>
       <input className={button_get_demo.join(' ')} type = "submit" value="Submit"/>
</div>
      </form> 
      <div className={SignupForm.join(' ')}>

       <div className="thanku">Thank you!</div>
       <div className="message">We will get in touch with you via email within 24 hours.</div>

       <button className="button_get_home"><Link style={{textDecoration: 'none' ,  color: 'white'}} to="/">Home</Link></button>
      </div>
      </Form>
     
    );
  },
});


export default FormExample;