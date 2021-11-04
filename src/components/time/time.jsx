import React, {useState} from "react";

import "./time.scss"

const Time = () => {
    const startTime = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(startTime);


    const getTime = () => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    setInterval(() => {
        getTime();
    }, 1000);

    return <div className = "time" >
        <h1>{currentTime}</h1>
    </div>;

}   // end of Time

export default Time;