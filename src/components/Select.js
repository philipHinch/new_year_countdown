const Select = () => {
    return (
        <div className="selectContainer">
            {/* <h3 className="selectTitle">Change Occasion:</h3> */}
            <select name="select" id="select">
                <option value="newYears">New Years</option>
                <option value="halloween">Halloween</option>
            </select>
        </div>
    );
}

export default Select;