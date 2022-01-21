import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header max-width">
      <img
        src="https://mail.google.com/mail/u/0?ui=2&ik=b3f193e1c4&attid=0.1.1&permmsgid=msg-f:1721883039200340285&th=17e55b80504e693d&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8W-lKtJ2e6U2GYd1iA93pV2lSH48qhR14oLOm5re9b1XtzuPsGsDtWqlBTtgliuR7zYrSCxYprw13EnJab7B0qHwE_oRIT7tEyCMjZ4kzw0eGNAIpjbPCK0Ms&disp=emb"
        alt="Hugo-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Ojo</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Razak</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;