import React from "react";
import githubLogo from "../assets/icons/github-icon.png";
import instagramLogo from "../assets/icons/instagram-icon.png"

export default function Footer(){
    return (
        <div className = "card--footer">
            <a href="https://github.com/saketh-yedugani">
                <img src={githubLogo} alt="github Logo" />
    
            </a>
            <a href="#">
                <img src={instagramLogo} alt="" />
            </a>
        </div>
    )
}