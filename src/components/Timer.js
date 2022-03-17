//components
import { useEffect, useState } from "react";
import Box from "./Box";


const Timer = () => {

    const [months, setMonths] = useState(0)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [isCancelled, setIsCancelled] = useState(false)

    const now = new Date()
    const currentYear = new Date().getFullYear()
    const newYears = new Date(`01 Jan ${ currentYear + 1 } 00:00:00 GMT`);


    //MAIN LOGIC

    useEffect(() => {

        const myInterval = setInterval(() => {
            calculateTimeDifference()
        }, 1000)

        return () => clearInterval(myInterval)

    }, [seconds])



    const calculateTimeDifference = () => {
        //time difference in milliseconds
        const diff = Date.parse(newYears) - Date.parse(now);
        //set days left
        setDays(Math.floor(diff / 1000 / 60 / 60 / 24));
        //set hours left
        setHours(Math.floor(diff / 1000 / 60 / 60) % 24);
        //set minutes left
        setMinutes(Math.floor(diff / 1000 / 60) % 60);
        //set seconds left
        setSeconds(Math.floor(diff / 1000) % 60);
    }






















    /////////////////////////////////////////////////////
    useEffect(() => {
        // setInterval(function () {
        //     getTimeAndDateNow();
        // }, 1000);
    }, [])

    const getTimeAndDateNow = () => {
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let hour = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();

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