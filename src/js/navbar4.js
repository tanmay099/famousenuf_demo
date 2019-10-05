import React from 'react';
import { BrowserRouter , HashRouter, Route, Link, Switch} from 'react-router-dom';
import '../css/navbar.css'



class Navbar extends  React.Component {

    
    constructor(props) {
        super(props);
          this.toggleNav = this.toggleNav.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleColor2 = this.handleColor2.bind(this);
        //  this.handleScroll2 = this.handleScroll2.bind(this);
      
        this.state = {
            collapse: false,
            uncollapsed: false,
            colored: false,
             colored2: false,
        }
      };
      
            toggleNav(){
                // alert('button_clicked');
            // console.log("button_clicked"); 
          this.setState({ uncollapsed: !this.state.uncollapsed });
          
           };
           
           handleColor(){
               
                 this.setState({ colored: !this.state.colored });
               
           }
      
          handleColor2(){
               
                 this.setState({ colored2: !this.state.colored2 });
               
           }
      
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      };
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      };
      
      handleScroll(event) {
        console.log('the scroll things', event)
        this.setState({collapse: true});
        this.setState({uncollapsed: false});
        

      };




    render(){
        let wrapper = ['wrapper'];
        let navbarcss = ["navbarcss"];
        let five = ["five"];
        let spanColor = ["spanColor"];
        let ic_menu = ["ic_menu"];
        let signUp_mobile = ["signUp_mobile"];
        let simplelist = ["simple-list li"];
        let logo = ["logo"];
        let a3 = ["a3"];
        let a = ["a"];
let collapse = this.state.collapse;

console.log(collapse);
        if(collapse){
            signUp_mobile.push('show');
            ic_menu.push('show');
            wrapper.push('small');
            logo.push('show');
            navbarcss.push('hider');
            simplelist.push('collapsed');
        }
          if(this.state.uncollapsed){
             signUp_mobile.pop('show');
             wrapper.push('bg');
                   ic_menu.pop('show');
             logo.pop('show');
            navbarcss.pop('hider');
            simplelist.pop('collapsed');
        }
        if(this.state.colored){
            a3.push('yellow');
            a.push('white');
            // five.push('yellow');
            spanColor.push('orange');
            
        }
          if(this.state.colored2){
            
            a.push('white');
            five.push('yellow');
            spanColor.push('orange');
            
        }
  

        
        //     if(!collapse){
        //     signUp_mobile.pop('show');
        //     ic_menu.pop('show');
        //     wrapper.pop('small');
        //     logo.pop('show');
        //     navbar.pop('hide');
        //     simplelist.pop('collapsed');
        // }
        return(
 <div className={wrapper.join(' ')} style={{background: '#202E68'}}>
        <div className="navigation">
        <div className="navbar_1">
        <img onClick = {this.toggleNav}  className={ic_menu.join(' ')} src={require('../images/ic_menu.png')} 
      />
          <div className={logo.join(' ')} 
          
          
          >
          
      <a style={{ textDecoration: 'none' }} href="http://famousenuf.com"><div className="title_div">FAMOUS<span id="logo_color">ENUF</span></div></a>
          </div>
          <span className={signUp_mobile.join(' ')}>Book a demo</span>
          </div>
         <div className={navbarcss.join(' ')}>
         <div class="navbar_space1"></div>
              <ul className={simplelist.join(' ')}>
          <li className="li.collapsed"><Link onClick={this.handleColor} className="a3" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
          {/* <li className={"li"}><Link className={a.join(' ')} to="" style={{ textDecoration: 'none' }}><span >FAQs</span></Link></li> */}

          <li className={""}><a onClick={this.handleColor} href="http://brand.famousenuf.com" style={{ textDecoration: 'none' }}  className={a3} >Login</a></li>
          <li className="five"><Link onClick={this.handleColor2} to="/signup/:email"  style={{ textDecoration: 'none' }}><span  className={five.join(' ')}>Book a demo</span></Link></li>
    
             </ul>
             <div className="navbar_space2"></div>
          </div>
        </div>
</div>
    );
}
    
}
export default Navbar;