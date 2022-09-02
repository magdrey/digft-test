import React from 'react';
import { Feedbacks } from './Hearsource';
import hcs from "../img/Cs.svg"

const Happyhear = () => {
    return (
        <>
         <div className="hear-cont-cont">
        {Feedbacks.map((hearCard, index) => {
            return (
                <>

               
                    <div className="hear-cont " key={index}>
                        <h5 className="hear-label">{hearCard.label}</h5>
                        <div className="hear-title-pic">
                            <img src={hcs} className="card-img-top" height="40px" />
                            <div className="hear-name-title">
                            <h5 className="hear-name">{hearCard.Name}</h5>

                            <h5 className="hear-title">{hearCard.title}</h5>
                            </div>
                            
                            </div>
                            
                       
                    </div>
                    
                </>
            )
        })}
</div>
    </>
    )
}

export default Happyhear
