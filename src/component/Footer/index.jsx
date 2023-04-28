import React from "react";
import './Footer.css';
import { FacebookIcon } from './facebook'
import { InstagramIcon } from "./instagram";
import { TwitterIcon } from "./Twitter";


export function Footer() {
  return (
    <div className="Footer">
        <div className="footer-container container">
        <p className="footer_logo">   © ПРИЮТ БИРЮЛЕВО,  2023</p>
        <div className="footer_icon">
        <h4 className="footer_friends"> ПОМОГИ СОБАКАМ – РАССКАЖИ О НАС ДРУЗЬЯМ!</h4>
      <div className="footer_icons"> 
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
        </div>
<div className="footer_email">
<svg  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.46271 4.30664H20.4627C21.5627 4.30664 22.4627 5.20664 22.4627 6.30664V18.3066C22.4627 19.4066 21.5627 20.3066 20.4627 20.3066H4.46271C3.36271 20.3066 2.46271 19.4066 2.46271 18.3066V6.30664C2.46271 5.20664 3.36271 4.30664 4.46271 4.30664Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.4627 6.30664L12.4627 13.3066L2.46271 6.30664"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className="email">НАПИСАТЬ НАМ</div>
</div>
</div>




    </div>
  );
}

export default Footer;
