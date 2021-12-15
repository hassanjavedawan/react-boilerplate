import React, { useState } from "react";

export default function CountDown(props) {
    const [days, setdays] = useState(null);
    const [hours, sethours] = useState(null);
    const [minutes, setminutes] = useState(null);
    const [seconds, setseconds] = useState(null);
  
    var countDownDate = new Date("Dec 08, 2021 15:40:00 UTC")
    var GetIme = new Date(countDownDate).getTime();

  

    setInterval(() => {
      var now = new Date().getTime();
      var distance = GetIme - now;
      var day = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var second = Math.floor((distance % (1000 * 60)) / 1000);
      setdays(day);
      sethours(hour);
      setminutes(minute);
      setseconds(second);
    }, 1000);

    return (
        <React.Fragment>
            {seconds > -1 &&
                <div className="m-auto timer w-75  d-block" style={{ color: props.color }}>
                    <h1 id="day">
                        <strong></strong>  
                        <small></small>
                    </h1>
                    <h1 id="hours">
                        <strong>{hours}</strong> 
                        <small>HOURS</small>
                    </h1>
                    <h1 id="minutes">
                        <strong>{minutes}</strong> 
                        <small>MINUTES</small>
                    </h1>
                    <h1 id="seconds">
                        <strong>{seconds}</strong>
                        <small>SECONDS</small>
                    </h1>
                </div>
            }
        </React.Fragment>
    )
}