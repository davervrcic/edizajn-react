import React, {Component} from 'react';

class Header extends Component {
    render() {
      return (
      
    <div>
            <div className="left">
            <div className="border"></div>
                <a className="logo" href="https://www.e-dizajn.com"><img src="graphic/logo.svg"/></a>
            <div className="logo-label">
            <div className="logo-label-inner">e-dizajn studio</div>
        </div>
    </div>
    <nav>
        <ul>
            <li><a href="https://www.e-dizajn.com#services" data-section="services">Services</a></li>
            <li><a href="https://www.e-dizajn.com#work" data-section="work">Our work</a></li>
            <li><a href="https://www.e-dizajn.com#culture" data-section="culture">About us</a></li>
            <li><a href="https://www.e-dizajn.com#contact" data-section="contact">Contact</a></li>
            {/**<li>
                <span className="lang">BS</span>
                <div className="lang-dropdown">
                    <a href="en/index.html" title="English" className='active'>EN</a>
                    <a href="#" title="Bosanski" >BS</a>
                </div>
            </li>**/}
        </ul>
    </nav>
    <div className="hamburger-ico">
        <div className="part top"></div>
        <div className="part cross cross1"></div>
        <div className="part cross cross2"></div>
        <div className="part bottom"></div>
    </div>


      </div>
      
      );
    }
  }

  export default Header;