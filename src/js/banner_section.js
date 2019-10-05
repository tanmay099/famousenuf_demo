import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './footer';
import '../css/banner_desktop.css';
import '../css/banner_mob.css';
import '../css/banner_tablet.css';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';


const style = {
    
    
  height: 69,
  borderBottomLeftRadius: 50,
	borderBottomRightRadius: 50,
	borderTopLeftRadius: 50,
	borderTopRightRadius: 50,
  
};
const style2 = {
     height: 69,
     
  borderBottomLeftRadius: 50,
	borderBottomRightRadius: 50,
	borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  // hover: white,



  };
    
    
    


const styles1 = {
    
    
  
  borderBottomLeftRadius: 8,
	borderBottomRightRadius: 8,
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
  
};
const styles2 = {
     
  borderBottomLeftRadius: 8,
	borderBottomRightRadius: 8,
	borderTopLeftRadius:  0,
	borderTopRightRadius: 0,
    
    
    
};
const radioButton = {
  maxWidth: 24,
  width:  24,
  height: 24,
};
const radiobuttonStyle ={
  color: "#FFFFFF",  
};
class Banners extends React.Component{

constructor(props) {
    super(props);
     this.handleScroll = this.handleScroll.bind(this);
   this.toggle = this.toggle.bind(this);
   this.rightToggle = this.rightToggle.bind(this);
   this.nextQ = this.nextQ.bind(this);
   this.nextQ2 = this.nextQ2.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleSubmit2 = this.handleSubmit2.bind(this);
   this.CompleteState = this.CompleteState.bind(this);
  //  this.addClass = this.addClass.bind(this);
  //  this.addClass = this.addClass.bind(this);
  this.state = {
    email: 'hello@e.com'
  }
  this.state = {nextClass: false}
 
  this.state = {nextClass2: false}
  this.state = {nextClass3: false}
  this.state = {nextClass4: false}
   
    this.state = {addClass2: false}
    
    this.state = {addClass3: false}
    this.state = {addClass4: false}
    
    this.state = {rightClass: false}
    this.state = {rightClass2: false}
    this.state = {rightClass3: false}
    this.state = {rightClass4: false}
    this.state = {disabled: false}
    this.state = {addClass: false}
    this.state = {animate : false};

    
  }
  handleChange(event) {
    this.setState({email: event.target.email});
  }
  handleSubmit(event) {
    console.log($("#know_more_form2").serialize())
    alert('Thank you! ..We will get in touch with you via email within 24 hours');
    $.post( "http://52.220.134.160/api/hello", $("#know_more_form2").serialize())
    .done(function (formData) {
      console.log("registered succefully",formData);
    
      

    })
    .fail(function (formData) {
      
    });
  }
  handleSubmit2(event) {
    console.log($("#know_more_form3").serialize())
    alert('Thank you! ..We will get in touch with you via email within 24 hours');
    $.post( "http://52.220.134.160/api/hello", $("#know_more_form3").serialize())
    .done(function (formData) {
      console.log("registered succefully",formData);
    
      

    })
    .fail(function (formData) {
      
    });
  }


CompleteState(){
    
  window.location.reload();
    
}
nextQ(){
  
  if(!this.state.nextClass){
    
     this.setState({nextClass: true});
    //  return;
        }
      if(this.state.nextClass){
    //  this.setState({addClass: false});
     this.setState({nextClass2 : true});
        
      }
      if(this.state.nextClass2){
  this.setState({nextClass3: true});
      }
      
      
      if(this.state.nextClass3){
          
          this.setState({nextClass4: true});
      }
 




}

nextQ2(){

  if(!this.state.nextClass){
  
     this.setState({nextClass: true});
    //  return;
        }
      if(this.state.nextClass){
    //  this.setState({addClass: false});
     this.setState({nextClass2 : true});
        
      }
      if(this.state.nextClass2){

        this.setState({nextClass3: true});
      }if(this.state.nextClass3){
          
          this.setState({nextClass4: true});
      }
}
  toggle() {
  //  console.log(this.state.addClass);
    if(!this.state.addClass){
// this.setState({rightClass: true});
 this.setState({addClass: true});
//  return;
    }
  if(this.state.addClass || this.state.rightClass){
//  this.setState({addClass: false});
 this.setState({addClass2 : true});
    
  }
  if(this.state.addClass2 || this.state.rightClass2)
  {

this.setState({addClass3: true});

  }
  if(this.state.addClass3 || this.state.rightClass3){
this.setState({addClass4: true});

  }
    
    // console.log(this.state.addClass2);
    // if({addClass: true}){
    //   //  console.log(this.state.addClass);
    //   this.setState({addClass: false});
    //   this.setState({addClass2: true});
    //   return;


    


   
    
  
  }
  rightToggle(){
    if(!this.state.rightClass){
      
       this.setState({rightClass: true});
      //  return;
          }
        if(this.state.rightClass  || this.state.addClass){
      //  this.setState({addClass: false});
       this.setState({rightClass2 : true});
          
        }
        if(this.state.rightClass2 || this.state.addClass2){
          this.setState({rightClass3: true});
        }
        if(this.state.rightClass3 || this.state.addClass3){
          this.setState({rightClass4: true});
        }
  }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      };
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      };
      
      handleScroll(event) {
   console.log('scroll.....');
   const height = $(window).height();
   const docheight = $(document).height();
const scrollTop = $(window).scrollTop();

console.log(scrollTop + height );
console.log(docheight);
if(  $(window).scrollTop() + $(window).height() >=  $(document).height()-2081  &&  $(window).scrollTop() + $(window).height() <=  $(document).height()-2028){
        this.setState({animate: !this.state.animate});
}

      };

  
  render() {
   
      let cardtextStyle = ["cardtext"];
    let arrow_color = ["arrow_colo3r"];
    let hideClass = ["hidden"];
    let nextClass = ["hidden2"];
     let nextClass2 = ["hidden2"];
    let rightChoice = ["hidden"];
    
  let raisedButton = ["raisedButton"];
  let asking_cards1 = ["asking_cards1"];
  let asking_cards1show = ["asking_cards1.show"];
  let asking_cards2 = ["asking_cards2"];
  let asking_cards = ["asking_cards"];
    let disable = false;
    let showClass = ["optionShow"]
    let fixed_images_left = ["fixed_images_left"];
    let fixed_images_right = ["fixed_images_right"];
    let fixed_images2_left = ["fixed_images2_left"];
    let fixed_images2_right = ["fixed_images2_right"];
    let fixed_images3_left = ["fixed_images3_left"];
    let fixed_images3_right = ["fixed_images3_right"];
    let fixed_images4_left = ["fixed_images4_left"];
    // let fixed_images4_right= ["fixed_images4"];
    let fixed_images4_right= ["fixed_images4_right"];
    let ad_choice1_span = ["ad_choice1_span"];
    let ad_choice2_span = ["ad_choice2_span"];
    let ad_choice3_span = ["ad_choice3_span"];
    let ad_choice4_span = ["ad_choice4_span"];
    let friend_choice1_span = ["friend_choice1_span"];
    let friend_choice2_span = ["friend_choice2_span"];
    let friend_choice3_span = ["friend_choice3_span"];
    let friend_choice4_span = ["friend_choice4_span"];
   let  correctA1 = ["correctA1"];
   let  correctA2 = ["correctA2"];
   let  correctA3 = ["correctA3"];
   let  correctA4 = ["correctA4"];
   let wronganwser1 = ["wronganwser1"];
   let wronganwser2 = ["wronganwser2"];
   let wronganwser3 = ["wronganwser3"];
   let wronganwser4 = ["wronganwser4"];
   let q11 = ["q11"];
   let q12 = ["q12"];
   let q13 = ["q13"];
   let q14 = ["q14"];
   let quiz_complete_panel = ["quiz_complete_panel"];
   let banner1 = ["banner1"];
   let left_panel = ["left_panel"];
   let right_panel = ["right_panel"];
   let button1 = ["button1"];
   let button2 = ["button2"];
   const addClass =  this.state.addClass;
   console.log(addClass);
    if(addClass) {
       asking_cards.push('hide');
       
       fixed_images_left.push('glow');
       fixed_images_right.push('glow');

    asking_cards1.push('show');
      // disable = true;
 }

if(this.state.animate){
    
  
  left_panel.push('animate');
    right_panel.push('animate');
    button1.push('animate');
     button2.push('animate');
    }
 if(this.state.addClass2){
   asking_cards.push('hide');
   asking_cards1.push('show');
   
  //  correctA1.push('hide');aakbsbhj9fcf82.cwljn9tsgn5y.ap-southeast-1.rds.amazonaws.com

  wronganwser2.push('show');
  
   wronganwser1.push('hide');
// ad_choice2_span.pop('show');
// ad_choice2_span.pop('show');
  //  correctA1.push('show');
   fixed_images2_left.push('glow');
   fixed_images2_right.push('glow');

  //  asking_cards2.push('show');
}
 if(this.state.addClass3){
  asking_cards.push('hide');
  asking_cards1.push('show');
  fixed_images3_left.push('glow');
  fixed_images3_right.push('glow');
  // wronganwser2.pop('show');
  wronganwser3.push('show');
}
if(this.state.addClass4){
   asking_cards.push('hide');
   asking_cards1.push('show');
   fixed_images4_right.push('glow');
   fixed_images4_left.push('glow');
  //  wronganwser1.pop('show');
  //  wronganwser2.pop('show');
   wronganwser3.pop('show');
   wronganwser4.push('show');

}
     
    if(this.state.rightClass){
       asking_cards.push('hide');
         asking_cards2.push('show');
        //  ad_choice2_span.pop('show');
         wronganwser1.push('hide');
        //  correctA2.push('show');
         
         fixed_images_right.push('glow');
         fixed_images_left.push('glow');
        
           }
           if(this.state.rightClass2){
            asking_cards.push('hide');
            asking_cards2.push('show');
            correctA2.push('show');
            correctA1.push('hide');
            fixed_images2_left.push('glow');
            fixed_images2_right.push('glow');
         }

if(this.state.rightClass3){
asking_cards.push('hide');
asking_cards2.push('show');
correctA3.push('show');
fixed_images3_left.push('glow');
fixed_images3_right.push('glow');

}
if(this.state.rightClass4){
  asking_cards.push('hide');
  asking_cards2.push('show');
  correctA4.push('show');
  fixed_images4_left.push('glow');
  fixed_images4_right.push('glow');

}

           if(this.state.nextClass){
             q11.push('hide');
             q12.push('show');
   fixed_images_left.push('hide');
   fixed_images_right.push('hide');
   fixed_images2_left.push('show');
   fixed_images2_right.push('show');
   friend_choice1_span.push('hide');
   friend_choice2_span.push('show');
   correctA1.push('hide');
   wronganwser1.push('hide');
   ad_choice1_span.push('hide');
//   ad_choice2_span.push('show')
//    ad_choice1_span.push('hide');
   ad_choice2_span.push('show');
asking_cards.pop('hide');
if(this.state.rightClass){
asking_cards2.pop('show');
}
if(addClass){
asking_cards1.pop('show');
}

           }

           if(this.state.nextClass2){
             q12.pop('show');
             q13.push('show');
            fixed_images2_left.pop('show.glow');
            fixed_images2_right.pop('show.glow');
            fixed_images3_left.push('show');
            fixed_images3_right.push('show');
            friend_choice2_span.pop('hide');
            ad_choice2_span.pop('show');
            friend_choice3_span.push('show');
            ad_choice1_span.push('hide');
            // ad_choice2_span.pop('show')
            // ad_choice1_span.push('hide');
            wronganwser2.pop('show');
          
            ad_choice3_span.push('show');
            // asking_cards.pop('hide.hide');
            // asking_cards.pop('hide');
            // asking_cards.pop('hide.');
        // wronganwser1.push('show');
        correctA1.push('hide');
        correctA2.pop('show');
      
        if(this.state.rightClass){
         asking_cards.pop('show');
        }
      
         if(this.state.addClass){
         asking_cards.pop('show');
         }
         if(this.state.addClass2){
          //  wronganwser2.pop('show');
          
           asking_cards1.pop('show');
          
         }

          if(this.state.rightClass2){
            
         asking_cards2.pop('show');
        }
        }


if(this.state.nextClass3){
  q13.pop('show');
  q14.push('show');
  fixed_images3_left.pop('show.glow');
  fixed_images3_right.pop('show.glow');
  fixed_images4_left.push('show');
  fixed_images4_right.push('show');
  friend_choice3_span.pop('show');
  friend_choice4_span.push('show');
  correctA3.pop('show');
  ad_choice1_span.push('hide');
  ad_choice4_span.push('show');
  ad_choice3_span.pop('show');
//   ad_choice2_span.pop('show');
// asking_cards.pop('hide');

// asking_cards1.pop('show');
// asking_cards2.pop('show');

if(this.state.addClass){
// wronganwser2.pop('show');
  // asking_cards1.pop('show');
}
if(this.state.addClass2){
  //  asking_cards1.pop('show');
  asking_cards.pop('show');
}
if(this.state.rightClass2){
  //  asking_cards1.pop('show');
  asking_cards.pop('show');
}
if(this.state.addClass3){
  
    //  wronganwser2.pop('show');
  asking_cards1.pop('show');
 
}
if(this.state.addClass2){
  // wronganwser2.pop('show');
// asking_cards1.pop('show');
}
if(this.state.rightClass3){

  asking_cards2.pop('show');
}

// if(this.state.rightClass){
//   asking_cards2.pop('show');
// }

}
if(this.state.nextClass4){
quiz_complete_panel.push('show');

  banner1.push('hide');

  }
          return(
            <MuiThemeProvider>
          
         <div className="banner_section">

         
            <div className={banner1.join(' ')}>
                        <div className="banner1_question1">             
            Take this quiz to know how customers think</div>
            <div className="banner1_question2">
             <span className={q11.join(' ')}>If you had to buy a new car, who or what would you trust more?</span>
             <span className={q12.join(' ')}>If you had to buy a new phone, who or what would you trust more?</span>
             <span className={q13.join(' ')}>If you had to pick a new dress, who or what would you trust more?</span>
             <span className={q14.join(' ')}>If you had to pick a restaurant, who or what would you trust more?</span>
            
            
            
            
            </div>
            
 <div className="banner1_options">
 <div className={left_panel.join(' ')}
   
 >
 <img className={fixed_images_left.join(' ')}
  onClick={this.toggle}
 
 src={require('../images/a1.png')}/>
 <img className={fixed_images2_left.join(' ')} src={require('../images/b1.png')}
  onClick={this.toggle}
 />
 <img className={fixed_images3_left.join(' ')} src={require('../images/c1.png')}
  onClick={this.toggle}
 />
 <img className={fixed_images4_left.join(' ')} src={require('../images/d1.png')}
 onClick={this.toggle}
 
 />
 </div>
 <div className={right_panel.join(' ')}
 >
  <img className={fixed_images_right.join(' ')} src={require('../images/a2.png')}
  onClick={this.rightToggle}
  
  />
  <img className={fixed_images2_right.join(' ')} src={require('../images/b2.png')}
  onClick={this.rightToggle}
  
  />
  <img className={fixed_images3_right.join(' ')} src={require('../images/c2.png')}
  onClick={this.rightToggle}
  
  />
  <img className={fixed_images4_right.join(' ')} src={require('../images/d2.png')}
  
  onClick={this.rightToggle}
  
  />
 </div>
 
 
 </div>
            
            <div className={asking_cards.join(' ')}>
              
      <button className={button1.join(' ')}
      buttonStyle={style}
      onClick={this.toggle}
      >
      
      <div className={showClass.join(' ')}>
      <span className="radio">
<input id="radio-2" name="radio" type="radio" disabled={true} />
    <label for="radio-2" className="radio-label"></label>
  </span>
      <span className={ad_choice1_span.join(' ')}>A billboard ad </span>
      <span className={ad_choice2_span.join(' ')}>A banner ad </span>
      <span className={ad_choice3_span.join(' ')}>A dubious SMS</span>
      <span className={ad_choice4_span.join(' ')}>A push notification</span>
      
      
      </div>
    
      </button>
      <button className={button2.join(' ')}
      onClick={this.rightToggle}
       buttonStyle={style2}
      ><div className={showClass.join(' ')}
      >
      <span className="radio">
    <input id="radio-1" name="radio" type="radio" disabled={true} />
    <label for="radio-1" className="radio-label"></label>
  </span>
      <span className={friend_choice1_span.join(' ')}>Your car-crazy friend</span>
      <span className={friend_choice2_span.join(' ')}>Your tech-savvy friend</span>
      <span className={friend_choice3_span.join(' ')}>Your fashionista friend</span>
      <span className={friend_choice4_span.join(' ')}>Your foodie friend</span>
      </div>
      
      
      </button>
       </div>
      <div className={asking_cards1.join(' ')}
      onClick={this.nextQ}
      >
    
      <div className={cardtextStyle}>
      <span className={wronganwser2.join(' ')}><img className="tick_img"  src={require('../images/cross.png')} /><span className="right">Sorry! But people actually miss noticing the
banner ads. Only 3% people
voted for this answer.
</span></span>
      <span className={wronganwser1.join(' ')}><img className="tick_img" src={require('../images/cross.png')} /><span className="right">Umm... our little experiment says users don’t agree!
Only 2% people voted for this answer.</span></span>
   
    <span className={wronganwser3.join(' ')}><img className="tick_img" src={require('../images/cross.png')} /><span className="right">Sorry! We found that people usually dismiss
    such SMSes... only 3% voted for
    this answer!
</span></span>
<span className={wronganwser4.join(' ')}><img className="tick_img"  src={require('../images/cross.png')} /><span className="right">Well... only 2% people voted for
this answer. People usually
become blind to the barrage of
push notifiations they receive in a
day.
</span></span>
</div>
       
      <div className="cardbutton"
      onClick={this.nextQ}
      >
     <span className="next_span">NEXT</span>
     <i className="material-icons md-48 arrow_color">keyboard_arrow_right</i>
     </div>
    </div>
      
        <div className={asking_cards2.join(' ')}
        onClick={this.nextQ}
        >
    
      <div className={cardtextStyle}>
      <span className={correctA2.join(' ')}><img className="tick_img" src={require('../images/tick.png')} /><span className="right">That's right...
and 97% people
agree! 
</span></span>
<span className={correctA4.join(' ')}><img className="tick_img" src={require('../images/tick.png')} /><span className="right">Yes! Correct...and
98% people
agree!  
</span></span>

<span className={correctA3.join(' ')}><img className="tick_img" src={require('../images/tick.png')} /><span className="right">Wow! You're good at
this! 97%
people agree
with you.
</span></span>
<span className={correctA1.join(' ')}><img className="tick_img" src={require('../images/tick.png')} /><span className="right"> Indeed! Your customers couldn't agree more! 
 98% people voted for this answer.</span></span>
</div>
      <div className="cardbutton"
      onClick={this.nextQ}
      >
     <span className="next_span">NEXT</span>
     <i className="material-icons md-48 arrow_color" >keyboard_arrow_right</i>
     </div>
    
      
      </div>
   
      </div>
         <div className={quiz_complete_panel.join(' ')}>
        <div><span className="quiz_complete_line"> Is your brand
            </span></div>
            <div className="middle_logo">FAMOUS<span id="logo_color">ENUF</span> ?</div>
            <div><span className="quiz_complete_line2"> To find out, sign up now
            </span></div>
          <div>
          <form id="know_more_form3" className="form"  onSubmit={this.handleSubmit2} >
          <input type="email"  onChange={this.handleChange}  placeholder="      Enter your email" value={this.state.value} className="search" name="email" required></input>
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
             <div onClick={this.CompleteState}><span style={{textDecoration: "none"}} className="again_quiz_span">Take the quiz again?</span></div>     
      </div>
     
          <div className="banner1-2">
          <div className="banner1-2-inner">
                <div className="banner1_heading"><span className="banner1_heading_span">Everyone<span className="bold_text"> hates</span> forced ads</span><br/>
<div className="banner1_heading2">
<span className="heading2_text">            
Which is why<span className="bold_text"> 47% people use  ad blockers.</span> People suffer from ad fatigue and only 1% users said they trust brand created ads.</span></div>
        </div>
            <div className="banner1_img">
            <div className="banner1_img_div1"></div>
             <div  className="banner3_img_div2" ><img className ="banner3_img3"  src={require('../images/graphic1.gif')} /></div>
             </div>
           <div className="banner1_longtext">Which is why<span className="bold_text"> 47% people use  ad blockers. </span> People suffer from ad fatigue and only 1% users said they trust brand created ads.</div>
            </div>
            </div>
            <div className="banner2-2">      
            <div className="banner2">
            <div className="banner2_heading">...but everyone<span className="bold_text"> trusts</span> their friends<br/>
<div className="banner1_heading2">  
<span className="heading22_text">          
<span className="bold_text">Word-of-mouth advertising works best even today.</span> Over 92% people prefer peer recommendation over any other form of ads.</span></div>
            </div>
            <div className="banner2_img"><div className="banner2_img_div2" >
             <img className="img-width" src={require('../images/graphic2.gif')} />
             </div>
             <div className="banner2_img_div1"></div>
             </div>
           <div className="banner1_longtext"><span className="bold_text">Word-of-mouth advertising works best even today.</span> Over 92% people prefer peer recommendation over any other form of ads</div>
            </div>
            </div>
            <div className="banner3-3">
              <div className="banner3">
                <div className="banner1_heading"><span className="banner1_heading_span">Your customers are<span className="bold_text"> your best brand ambassadors</span></span><br/>
<div className="banner1_heading2"><span className="heading2_text">            
Each customer can get 5+ friends onboard!<span className="bold_text"> Get upto 11x ROI at a fraction of the cost.</span></span>
            </div>
            </div>
            <div className="banner1_img">
            <div className="banner1_img_div1"></div>
             <div  className="banner3_img_div2" ><img className ="img-width"  src={require('../images/graphic3.gif')} /></div>
             </div>
           <div className="banner1_longtext">Each customer can get 5+ friends onboard!  <span className="bold_text"> Get upto 11x ROI at a fraction of the cost.</span></div>
            </div>
            </div>
            
            <div className="steps_banner">
            <div className="banner_head">
            <div className="banner_head_text">
          How it works
            </div>
            </div>
            <div className="banner_steps">
          <div className="cube"><div className="paradiv"><span class="HeadText"><span className="hide">1</span> Create<img className="headNumber" src={require('../images/create.png')}/></span><span className="paraQuote">a campaign in a minute!</span></div></div>
          <div className="cube"><div className="paradiv"><span class="HeadText"><span className="hide">2</span> Discover<img className="headNumber" src={require('../images/discover.png')}/></span><span className="paraQuote">your most influential customers</span></div></div>
          <div className="cube"><div className="paradiv"><span class="HeadText"><span className="hide">3</span> Activate<img className="headNumber" src={require('../images/activiate.png')}/></span><span className="paraQuote">them on social media with our SAAS platform</span></div></div>
          <div className="cube"><div className="paradiv4"><span class="HeadText"><span className="hide">4</span> Appreciate<img className="headNumber" src={require('../images/Star.png')}/></span><span className="paraQuote">their loyalty as you see fit</span></div></div>
          <div className="cube"><div className="paradiv5"><span class="HeadText"><span className="hide">5</span> Analyse<img className="headNumber" src={require('../images/analyze.png')}/></span><span className="paraQuote">the results using our advanced dashboard</span></div></div>
          
          <Link style={{textDecoration: 'none', color: 'white'}} className="learn_more" to={"/signup/:"+this.state.value} ><div className="raisedButton">Request a demo</div></Link>
           
            
            </div>
           
            </div>
            <div className="subscribe_banner">
            <div><span className="subscribe_banner_text"> Let your customers tell your story.

            </span></div>
            <div><div className="span_text">
Because, they do it best.
</div></div>
          <div>
          <form id="know_more_form2" className="form"  onSubmit={this.handleSubmit} >
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
     
            </MuiThemeProvider> 
            );
        }
      }
    

export default Banners;