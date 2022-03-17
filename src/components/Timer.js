//components
import { useEffect, useState } from "react";
import Box from "./Box";
//select
import Select from 'react-select';

const options = [
    { value: 'new years', label: 'New Years', date: '31st December' },
    { value: 'christmas', label: 'Christmas', date: '25th December' },
    { value: 'halloween', label: 'Halloween', date: '31st October' },
    { value: 'all saints', label: 'All Saints', date: '1st November' },
    { value: 'epiphany', label: 'Epiphany', date: '6th January' },
    { value: 'valentines', label: 'Valentines', date: '14th February' },
    { value: 'st partrick\'s day', label: 'St. Patrick\'s', date: '17th March' },

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

    const [date, setDate] = useState(new Date(`01 Jan ${ currentYear } 00:00:00 GMT`))



    //MAIN LOGIC

    useEffect(() => {
        console.log(category);
    }, [category])

    useEffect(() => {
        const myInterval = setInterval(() => {
            calculateTimeDifference()
        }, 1000)
        //cleanup function. clears interval after every load
        return () => clearInterval(myInterval)
    }, [seconds])


    const validateYear = (date) => {
        //if the date parameter is less than the now, return a new date with the extra year
        let newDate
        if (Date.parse(date) < Date.parse(now)) {
            newDate = date.setFullYear(currentYear + 1)
            console.log('date is in the past');
            console.log(newDate);
        } else {
            newDate = Date.parse(date)
            console.log('date is in the future');
            console.log(newDate);
        }
    }

    //validateYear(new Date('01 Mar 2022 00:00:00 GMT'))


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
        setIsReady(true)
    }

    if (!isReady) {
        return <p className="loading">LOADING....</p>
    }

    return (
        <div className="timerContainer">
            <h1 className="timerTitle">{category.label ? category.label : 'New Years'} Countdown</h1>
            <div className="boxesContainer">
                <Box type={'days'} number={days} />
                <Box type={'hours'} number={hours} />
                <Box type={'minutes'} number={minutes} />
                <Box type={'seconds'} number={seconds} />
            </div>
            <Select
                className="select"
                options={options}
                onChange={(option) => setCategory(option)}
                placeholder={'Change Day...'}
                styles={customStyles}
                menuList={'red'}
                defaultValue={options[0]}
            />
        </div>

    );
}

export default Timer; 