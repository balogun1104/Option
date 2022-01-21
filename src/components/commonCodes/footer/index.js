import React from 'react';

import './footer.css';



const Footer = () => {
    return (
        
        
    <div className="footer-distributed">

        <div className="footer-left">
            <h3>Unlimted <span> Option</span></h3>

            <div className="footer-links">
               
            </div>

            <div className="footer-company-name">Copyright © 2022  
            <strong>   ZAKDEV</strong> All rights reserved</div>
        </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Lagos</span>
                    Nigeria</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+234 810 321 8560</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" >razak@free@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span>
                <strong>Corrupt Organization</strong> is a team that works on all kind of tech
                Web Creation,
                Content Writing,
                Ui/Ux Designs
            </p>
            <div className="footer-icons">
                <a  href="https://web.facebook.com/profile.php?id=100008466552812" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/hugofrysandgrills/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                {/* <a href="#"><i className="fa fa-linkedin"></i></a> */}
                <a href="https://twitter.com/HugoFrysGrillss" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                <a href="https://web.facebook.com/profile.php?id=100008466552812" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
            </div>
        </div>
        </div>
    )
}

export default Footer
