import Nums from "./components/Nums";
import MoneyValues from "./components/MoneyValues";
import Results from "./components/Results";
import {useState, useEffect} from "react";
import Header from "./components/Header";

function App() {
  const [selectedNums, setSelectedNums] = useState([]);
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);
  useEffect(()=>{
    setSelectedNums(prev => []);
    setTotal(prev => 0);
    setShowResult(prev => false);
  },[]);
  const toggleNum = (num) =>{
    if(showResult) {
      alert("Hit the Clear button!!!");
      return;
    }
    if(selectedNums.length == 5){
      if(total > 0) alert("You've already added values!!!");
      else alert("You can only choose 5 numbers!!!");
    }
    else setSelectedNums(prev => [...selectedNums, num]);
  };
  const cancelNum = (num)=> {
    if(total > 0) alert("You've already added some values, can't change the number!!!");
    else setSelectedNums(prev => selectedNums.filter((item) => item != num));
  };
  const clear = () =>{
    setSelectedNums(prev => []);
    setTotal(prev => 0);
    setShowResult(prev => false);
  };
  const addValue = (value) => {
    if(selectedNums.length < 5) alert("You must select 5 numbers first!!!");
    else if (showResult) alert("Hit the Clear button!!!");
    else setTotal(prev => prev + value);
  };
  const cash = () => {
    if(selectedNums.length == 5) setShowResult(prev => true);
    else alert("You must choose 5 numbers!!!");
  };
  const randomize = () =>{
    if (showResult){
      alert("Hit the Clear button");
      return;
    }
    if(total == 0){
      const rands = [];
      for(let i = 0; i < 5; i++){
        let temp = getRandomArbitrary(1, 21);
        if(rands.indexOf(temp) > -1) i--;
        else rands.push(temp);
      }
      setSelectedNums(prev => rands);
    }
    else alert("You've already added values!!!");
  };
  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <div className="container">
      <Header />
      <MoneyValues addValue = {addValue}/>
      <Nums randomize = {randomize} selectedNums = {selectedNums} toggleNum = {toggleNum} cancelNum = {cancelNum} clear = {clear} cash ={cash}/>
      <Results show={showResult} selectedNums = {selectedNums} total = {total}/>
    </div>
  );
}

export default App;
