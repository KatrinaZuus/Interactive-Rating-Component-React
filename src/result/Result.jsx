import resultImage from "/images/illustration-thank-you.svg"
import "./result.css"

export default function Result ({rate}) {
    return (
        <>
            <div className="container" id="result-container">
                <img src={resultImage} alt="" />
                <div className="select-rate">
                    <p>You selected {rate} out of 5</p>
                </div>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </>
    )
}