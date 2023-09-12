import React from "react";
import Typewritter from "typewriter-effect";

function Type(){
    return(
        <Typewritter
            options={{
                strings: [
                    "Software Developer",
                    "MERN Stack Developer",
                    "Tech Enthusiast",
                    "Debugger",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;