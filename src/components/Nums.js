import Num from "./Num";

const Nums = ({selectedNums, toggleNum, cancelNum, clear, cash, randomize}) => {
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const clearClicked = () => {
        clear();
    };
    const cashClicked = ()=>{
        cash();
    }
    const randClicked = () =>{
        randomize();
    }
    return (
        <div className="rowC section">
            {nums.map((item)=>(
                <Num key = {item} num={item} borderColor = {selectedNums.indexOf(item) != -1 ? "red" : "yellow"} toggleNum = {toggleNum} cancelNum = {cancelNum}/>
            ))}
            <div className="item" style={{width:"111px", height:"50px", backgroundColor: "yellow", color: "black"}} onClick={cashClicked}>Cash</div>
            <div className="item" style={{width:"111px", height:"50px", backgroundColor: "yellow", color: "black"}} onClick={clearClicked}>Clear</div>
            <div className="item" style={{width:"170px", height:"50px", backgroundColor: "yellow", color: "black"}} onClick={randClicked}>
                Random
            </div>
        </div>
    )
}

export default Nums
