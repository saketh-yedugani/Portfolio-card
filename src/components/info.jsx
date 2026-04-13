import React from "react";
import mailIcon from "../assets/icons/mail.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import cardImage from "../assets/IMG_0256.jpg"
export default function Info(){
    return (
        <div className = "card--info">
            <img className = "card--image" src={cardImage} alt="profile" />
            <h2>Saketh Yedugani</h2>
            <h5>Software Engineer | AI & Backend</h5>
            <h6>Python • FastAPI • AWS • GenAI • React</h6>
            <div className="info--buttons">
                <a href="mailto: saketh.yedugani@gmail.com" className="button">
                    <img src={mailIcon} alt="" />
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/yedugani-saketh-084817309/" className="button">
                    <img src={linkedinIcon} alt="" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}