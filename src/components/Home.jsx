import React from 'react';
import "./Home.css";
import hero from '../img/Hero.svg';
import Homecards from './Homecards';
import Happyhear from './Happyhear';
import subhero from '../img/LastCard.svg';

const Home = () => {
    return (
        <div className="homehomebody">
            <div className="hero">
                <img className="heroimg" src={hero} />
            </div>
            <Homecards />

            <div className="hearhappycont">
                <h1 className="hearhappy">“Hear what happy customers are saying about Digift”</h1>
            </div>
            <Happyhear />

            <div className="subhero">
                <img className="subheroimg" src={subhero} />
            </div>




        </div>
    )
}

export default Home
