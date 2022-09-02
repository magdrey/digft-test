import React from 'react';
import './Footer.css';
import logo from "../img/Logo.svg";
import soc1 from '../img/IG.svg';
import soc2 from '../img/FB.svg';
import soc3 from '../img/TWITTER.svg';
import soc4 from '../img/LINKEDIN.svg';
import scrolltop from '../img/Arrow-Up.svg';



const Footer = () => {

    const Toparrow = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      };
    return (

        <>
        <div className='foot'>
            <div className="firstfootlevel">
                <div className="foot-logosec">
                <img className=" logo" src={logo} />
                <p className='foot-text'> Creating happiness one giftcard at a time</p>
                <div className="soclogo">
                <img className=" socfa" src={soc1} />
                <img className=" socfa" src={soc2} />
                <img className=" socfa" src={soc3} />
                <img className=" socfa" src={soc4} />
                </div>

                </div>
                <div className="foot-contactussec">
                    <div className="contact-us-foot">
                        <p className="contahead">contact us</p>
                    <a className="soclinkend" href="#"> hello@digft.com </a>

                    </div>
                    <div className="office-foot">
                    <p className="contahead">office</p>
                    <a className="soclinkend" href="#"> office address </a>

                    </div>
                    <div className="terms-condi">
                    <a className="soclinkend" href="#"> terms and conditions </a>

                    </div>

                </div>
                <div className="foot-cpcsec">
                    <div className="companyend">
                    <p className="contahead"><strong>Company</strong></p>
                    <a className="soclinkend" href="#"> careers </a>
                    <a className="soclinkend" href="#"> FAQs </a>
                    </div>
                    <div className="productsend">
                    <p className="contahead"><strong>Products</strong></p>
                    <a className="soclinkend" href="#"> personnal </a>
                    <a className="soclinkend" href="#"> business </a>
                    <a className="soclinkend" href="#"> vendor </a>
                    </div>
                    <div className="contactsend">
                    <p className="contahead"> <strong>Contact</strong></p>
                        <a className="soclinkend" href="#"> instagram </a>
                        <a className="soclinkend" href="#"> twitter </a>
                        <a className="soclinkend" href="#"> linkedin </a>
                        <a className="soclinkend" href="#"> facebook </a>
                    </div>
                </div>
            </div>


            <div className="footleveltwo">
                <div className="lev2one">
                <img className=" scrolltop" src={scrolltop} onClick={Toparrow} />
                <p className="level2text">
                The website www.digiftng.com is owned and operated by Blinksky Nigeria Limited, 
                a company duly registered under the Laws of the Federal Republic of Nigeria 
                with RC Number: 1656204. Trademark to all logos of Giftcards are owned by their 
                respective brands and Blinksky Nigeria Limited doesn’t claim ownership of these trademarks. 
                All Giftcards dominated in USD are provided in conjunction with BlinkSky Inc. Users 
                must have valid US account and in some cases a valid US address before purchasing.
                </p>
                </div>

                <div className="copyrightfoot">
                Copyright © 2022 Blinksky Nigeria Limited
                </div>
            
            </div>
            
        </div>


        </>
    )
}

export default Footer
