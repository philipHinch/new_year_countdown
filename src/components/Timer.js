//components
import { useEffect, useState } from "react";
import Box from "./Box";
//select
import Select from 'react-select';

const now = new Date()
const currentYear = new Date().getFullYear()
const gmt = -(now.getTimezoneOffset() / 60).toString()

const options = [
    { value: 'new years', label: 'New Years', date: `01 Jan ${ currentYear + 1 } 00:00:00 GMT` },
    { value: 'christmas', label: 'Christmas', date: `25 Dec ${ currentYear } 00:00:00 GMT` },
    { value: 'halloween', label: 'Halloween', date: `31 Oct ${ currentYear } 00:00:00 GMT` },
    { value: 'all saints', label: 'All Saints', date: `1 Nov ${ currentYear } 00:00:00 GMT` },
    { value: 'epiphany', label: 'Epiphany', date: `6 Jan ${ currentYear } 00:00:00 GMT` },
    { value: 'valentines', label: 'Valentines', date: `14 Feb ${ currentYear } 00:00:00 GMT` },
    { value: 'st partrick\'s day', label: 'St. Patrick\'s', date: `17 Mar ${ currentYear } 00:00:00 GMT` },

]

const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
    }),
    control: base => ({
        ...base,
        border: 0,
        boxShadow: 'none',
        cursor: 'pointer'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

const Timer = ({ isReady, setIsReady, category, setCategory }) => {

    const now = new Date()
    const currentYear = new Date().getFullYear()
    const newYears = new Date(`01 Jan ${ currentYear + 1 } 00:00:00 GMT`);

    const [months, setMonths] = useState(0)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [title, setTitle] = useState('New Years')

    const [date, setDate] = useState(null)


    //MAIN LOGIC

    //receive string date from chosen category

    //compare date to now
    //convert both date and now to milliseconds, date must be bigger than now

    //call the calculateTimeDifference function

    // useEffect(() => {
    //     //console.log(options[0].date);

    //     if (isReady) {
    //         validate(options[0].date)
    //     }

    // }, [seconds])



    useEffect(() => {
        const myInterval = setInterval(() => {

            // let newDate = options[1].date
            calculateTimeDifference(category)

        }, 1000)
        //cleanup function. clears interval after every load
        return () => clearInterval(myInterval)
    }, [seconds])



    const validate = (date) => {
        setTitle(date.label)
        //if the date parameter is less than the now, return a new date with the extra year
        if (Date.parse(date.date) < Date.parse(now)) {
            let newDate = new Date(date.date).setFullYear(currentYear + 1)
            //console.log(new Date(newDate));
            newDate = new Date(newDate)
            setCategory(newDate)

            //calculateTimeDifference(newDate)

            //console.log(newDate);
        } else {
            //newDate = date
            //console.log(newDate);
            setCategory(date.date)

            //calculateTimeDifference(date)

            //console.log(newDate);
        }
    }


    const calculateTimeDifference = (d) => {
        //time difference in milliseconds
        const diff = Date.parse(d) - Date.parse(now);
        //set days left
        setDays(Math.floor(diff / 1000 / 60 / 60 / 24));
        //set hours left
        setHours(Math.floor(diff / 1000 / 60 / 60) % 24);
        //set minutes left
        setMinutes(Math.floor(diff / 1000 / 60) % 60);
        //set seconds left
        setSeconds(Math.floor(diff / 1000) % 60);
        setIsReady(true)

    }


    if (!isReady) {
        return <p className="loading">LOADING....</p>
    }

    return (
        <div className="timerContainer">
            <h1 className="timerTitle">{title} Countdown</h1>
            <div className="boxesContainer">
                <Box type={'days'} number={days} />
                <Box type={'hours'} number={hours} />
                <Box type={'minutes'} number={minutes} />
                <Box type={'seconds'} number={seconds} />
            </div>
            <Select
                className="select"
                options={options}
                onChange={(option) => validate(option)}
                placeholder={'Change Day...'}
                styles={customStyles}
                defaultValue={options[0]}
            />
        </div>

    );
}

export default Timer; 