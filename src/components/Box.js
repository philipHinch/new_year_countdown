const Box = ({ type, number }) => {
    return (
        <div className={`box ${ type }Container`}>
            <h1 className="number">{number}</h1>
            <h2 className="text">{type}</h2>
        </div>
    );
}

export default Box;