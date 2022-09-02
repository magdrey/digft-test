import React from 'react';
import './BusinessPage.css';

import img2 from "../../img/Dashboard.svg";
import img3 from "../../img/Business-Homepage.svg";
import img4 from "../../img/Design.svg";
import img6 from "../../img/wide.svg";
import img7 from "../../img/CodeImg.svg";
import img9 from "../../img/NormalArr.svg";
import img10 from "../../img/Darkarr.svg";


const BusinessPage = () => {
    return (


        <>
            <div className="busshome">
                <div className="bus1level">
                    <div className="seclevel1">
                        <h1 className="firsttext">
                            Expand the giftcard industry,<p>one card </p>at a time!
                <img src={img6} className="img6" />
                        </h1>

                        <p className="subfirsttext">
                            Digift helps businesses connect with customers
                            by letting them offer their business gift cards to a large number of people.
                </p>
                        <div className="start-sign">
                            <div className="startcard">
                                <p className="startbtn">Get started</p>
                                <img src={img9} className="img9" />
                            </div>
                            <div className="signcard">
                                <p className="signbtn"> sign in</p>
                                <img src={img10} className="img9" />
                            </div>
                        </div>
                    </div>
                    <img src={img2} className="img2" />
                </div>
                <div className="bus2level">
                    <img src={img3} className="img3" />
                </div>
                <div className="bus3level">

                    <img src={img4} className="img4" />
                    <img src={img4} className="img4" />
                </div>
                <div className="bus4level">
                    <div className="seclevel1">
                        <h1 className="firsttext">
                            Our API is built to be as<p>lightweight</p>and efficient as possible.
                <img src={img6} className="img6" />
                        </h1>
                        <p className="subfirsttext">
                            We offer client and server libraries in everything from our API
                </p>
                        <div className="start-sign">
                            <div className="startcard">
                                <p className="startbtn">Get started</p>
                                <img src={img9} className="img9" />
                            </div>
                            <div className="signcard">
                                <p className="signbtn"> sign in</p>
                                <img src={img10} className="img9" />
                            </div>
                        </div>
                    </div>
                    <img src={img7} className="img7" />
                </div>
            </div>

        </>

    )
}

export default BusinessPage
