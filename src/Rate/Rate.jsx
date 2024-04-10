import Star from "/images/icon-star.svg"
import "./rate.css"
import { useState } from "react"

export default function Rate({setSubmit, rate, setRate}) {
    const ratesValue = [1, 2, 3, 4, 5]
    let index = 0
    console.log(index)
   
    
    return (
        
            <div className="container">
                <div className="star-container">
                    <img className="star" src={Star} alt="star-icon" />
                </div>
                
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="rate-container">
                {ratesValue.map((item, index)=>
                    <button className="rate-value" key={index}
                    onClick={()=> setRate(item)}
                    style = {rate == item ? {backgroundColor: "#7c8798", color: "#fff"} : {}}

                >{item}</button>
                )}
                </div>
                <button className="submit" type="submit" onClick={()=> setSubmit(true)}>SUBMIT</button>
            </div>

        
            )  
}