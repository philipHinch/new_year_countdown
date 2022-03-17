//components
import { useEffect, useState } from "react";
import Box from "./Box";


const Timer = () => {

    const [months, setMonths] = useState(5)
    const [days, setDays] = useState(261)
    const [hours, setHours] = useState(15)
    const [minutes, setMinutes] = useState(47)
    const [seconds, setSeconds] = useState(21)

    //MAIN LOGIC

    useEffect(() => {
        setInterval(function () {
            getTimeAndDateNow();
        }, 1000);



    }, [])

    const getTimeAndDateNow = () => {
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();

        let now = new Date()

        // day = day < 10 ? '0' + day : day
        // month = month < 10 ? '0' + month : month
        // hour = hour < 10 ? '0' + hour : hour
        // min = min < 10 ? '0' + min : min
        // sec = sec < 10 ? '0' + sec : sec

    };





    return (
        <div className="timerContainer">
            <Box type={'days'} number={days} />
            <Box type={'hours'} number={hours} />
            <Box type={'minutes'} number={minutes} />
            <Box type={'seconds'} number={seconds} />
        </div>
    );
}

export default Timer; 