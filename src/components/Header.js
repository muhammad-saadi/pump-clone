import React from "react";
import '../Header.css';

const Header = () => {

  return (
    <div className="header">
      <div className="logo">
        <span><img src={`${process.env.PUBLIC_URL}/main-logo.png`} alt="Logo Image" className="main-logo" /></span>
        <div className="info">
          <div>
            <a href="#">[how it works]</a>
            <a href="#">[advanced]</a>
          </div>
          <div className="social">
            <a href="#">[support]</a>
            <a href="#"><img src={`${process.env.PUBLIC_URL}/x-logo.png`} alt="X Image" className="header-logo" /></a>
            <a href="#"><img src={`${process.env.PUBLIC_URL}/telegram-logo.png`} alt="Telegram Image" className="header-logo" /></a>
            <a href="#"><img src={`${process.env.PUBLIC_URL}/instagram-logo.png`} alt="Instagram Image" className="header-logo" /></a>
            <a href="#"><img src={`${process.env.PUBLIC_URL}/tiktok-logo.png`} alt="Tiktok Image" className="header-logo" /></a>
          </div>
        </div>
      </div>

      <div>
        <span href="#connect-wallet">[connect wallet]</span>
      </div>
    </div>
  );
}

export default Header;