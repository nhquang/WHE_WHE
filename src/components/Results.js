

const Results = ({show, selectedNums, total}) => {
    return (
        <div className="section result" >
            <h1>Numbers Selected:</h1>
            {selectedNums.map((item) => (
                <p key = {item} style={{fontSize: "20px"}}>{item}</p>
                
            ))}
            
            <h1>Total: ${show && total}</h1>
        </div>
    )
}

export default Results
