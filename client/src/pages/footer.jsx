import React, {Component} from 'react';

class Footer extends Component {
    render() {
      return (

        <div>

        <p className="left">

        Netiks - društvo sa ograničenom odgovornošću za proizvodnju, trgovinu i usluge </p>
    
    <div className="socs">
        <div className="circle-border"></div>
        <div className="circle"></div>
        <div className="sites">
            <ul className="right">
                <li><a href="https://www.instagram.com/edizajnstudio/" target="_blank">&#xea92;</a></li>
                <li><a href="https://www.facebook.com/edizajnstudio/" target="_blank">&#xface;</a></li>
                {/**<!--<li><a href="https://dribbble.com/" target="_blank">&#xeaa7;</a></li>
                <li><a href="https://www.behance.net/" target="_blank">&#xbeac;</a></li>-->**/}
            </ul>
        </div>
    </div>
    <div id="mobile-test-element"></div>
    </div>
      
      );
    }
  }

  export default Footer;