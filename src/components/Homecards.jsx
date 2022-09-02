import React, { useState } from 'react';
import { CardsContent1 } from './Cardsource';
import amacard from "../img/DarkAmazon.svg";
import info from "../img/info.svg"

const Homecards = () => {







    const ShowCards = () => {

        return (
            <>
                {CardsContent1.map((CardsContent, index) => {
                    return (
                        <>

                            <div className="card-cont">
                                <div className=" cardcard" key={index}>
                                    <h5 className="card-label">{CardsContent.label}</h5>
                                    <div className="card-title-pic">
                                        <img src={amacard} className="card-img-top" height="25px" />
                                        <h5 className="card-title">{CardsContent.title}</h5>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-content">{CardsContent.content}</h5>
                                        <p className="card-info"> <img src={info} className="info-icon" />  {CardsContent.info}</p>

                                        <button className="card-btn" > {CardsContent.btn} </button>

                                    </div>

                                </div>
                            </div>
                        </>
                    )
                })}

            </>
        )
    };





    const latestfilters =
        ['Sports & Entertainment', 'Home and furnitures', " Jewelry & Watches", 'Clothes and Fashion', 'Electronics', 'Gaming', 'Airtime & Electricity', 'Popular', 'Ecommerce']
    const [checked, setChecked] = useState([]);
    const check = (event) => {
        var updatedList = [...checked]
        if (event.target.checked) {
            updatedList = [...checked, event.target.value]
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1)
        }
        setChecked(updatedList)

    };

    var isChecked = (item) =>
        checked.includes(item) ? 'checked-item' : 'not-checked-item';








    return (
        <div>
            <h2 className="latearr"> Latest Arrivals </h2>
            <div className="homecardbody">
                <div className='sidefilter'>
                    <div className="fillt">
                        <p>Filter</p> <p>Reset</p>
                    </div>
                    <div className="filterlist">
                        <p className="flh">Categories</p>

                        {latestfilters.map((filt) => (
                            <div key={filt} className="form-check">
                                <input className="form-check-input" type="checkbox" value={filt} onChange={check} id="filtitem" />
                                <label id="filtitem" className={isChecked(filt)}>
                                    {filt}
                                </label></div>
                        ))
                        }







                    </div>

                </div>
                <div className="cardss">
                    {<ShowCards />}

                </div>


            </div>
        </div>
    )
}

export default Homecards
