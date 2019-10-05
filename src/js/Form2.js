import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login_desktop.css';
import '../css/login_tablet.css';
import '../css/login_mobile.css';
import $ from 'jquery';


import { Form, FormGroup , FormControl ,ControlLabel , FieldGroup, HelpBlock ,Button} from 'react-bootstrap';

var createReactClass = require('create-react-class');
const FormExample2 = createReactClass({
  getInitialState() {
    return {
      value: '',
      spinner: false,
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },
  _submit: function(e) {
    // this.setState(!this.state.spinner);
    e.preventDefault();
    // TODO: Use AjaxPromise.
    $.post("http://localhost:5000/api/login", $("#login-form").serialize())
      .done(function(data){
        console.log("logged in",data);
        // this.setState(this.state.spinner);
      })
      .fail(function(data){
        // this.setState(this.state.spinner);
        console.log("Login error", data);
      });
  },
  render() {
    let spins = ["spinner.hide"];

     if(!this.state.spinner){

          spins.pop('hide');

     }



    return (
      <Form >
        <form
        id="login-form"
           className="tablet_form2"
           style={{display:'none'}}
           onSubmit={this._submit}
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
      <div>
             <ControlLabel 
             
              style={{fontSize : '12px'}}
             className="input_style">Enter your registered email ID</ControlLabel>
         <input style = {
        {
          fontSize: '12px'
        }
      }
      className="inputFieldStyle"
      placeholder = "Official email ID"
      name = "email"
      type = "email"/>
          <FormControl.Feedback />
          </div>
          <div>
             <ControlLabel 
              style={{fontSize : '12px'}}
             className="input_style">Enter your password</ControlLabel>
        <input className="inputFieldStyle"
       placeholder="Password"
      type = "password"
      name = "password"/>
             <FormControl.Feedback />
             </div>
             <div>
        <div className="input_style"><a className="forgot_pass" href="#">Forgot Password?</a></div>
       
          <input type="submit" value="submit" className="button_get_demo2"/>
          <div class={spins.join(' ')}>
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
          </div>

    
  
        </form>
      </Form>
    );
  },
});


export default FormExample2;