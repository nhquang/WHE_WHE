
const Num = ({num, borderColor, toggleNum, cancelNum}) => {
    const numClicked = () => {
        if (borderColor == "yellow") toggleNum(num);
        else cancelNum(num);
    };
    return (
        <div className = "item" style={{ width: "50px", height:"50px", borderColor: borderColor}} onClick={numClicked}>
            {num}
        </div>
    )
}

export default Num
