import React from "react";

function About({src,aboutText}){
    return(
        <aside>
            <img src={src} alt="blog logo"/>
            <p>{aboutText}</p>
        </aside>

    )
}

export default About;
