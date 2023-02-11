import { useState,useEffect } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';

function App() {
  let currentDate = new Date().toJSON().slice(0, 10);//YYYY-MM-DD // '2023-03-13'
  const [date, setDate] = useState(currentDate)
  const [YYYY, setYYYY] = useState (currentDate.slice(0,4))
  const [MM,setMM] = useState(currentDate.slice(5,7))
  const [DD, setDD] = useState(currentDate.slice(8))
  
  const checkInputValidity =()=>{
    if(YYYY>= 2300 || YYYY < 1700){
      alert("YYYY must be between 1700 to 2300")
    }
    else if(MM > 12|| MM<=0){
      alert("MM must be between 1 to 12")
    }
    else if(DD>= 31 || DD<=0){
      alert("DD must be between 1 to 31")
    }
    else{
      setDate(`${YYYY}-${MM}-${DD}`)
    }

  }

  
  return (
    <div className="App">
      
      <div className='inputBox'>
        <span> Enter Date : </span>
        <span> <input type="number" placeholder={YYYY} max={2300} min={1700} onChange={(e )=>setYYYY(e.target.value)} required /></span>
        <span> <input type="number" placeholder={MM} maxLength={2}  max={12} onChange={(e )=>setMM(e.target.value)} min={1} required /></span>
        <span> <input type="number" placeholder={DD} minLength={2} max={31} min={1} onChange={(e )=>setDD(e.target.value)} required /></span>
        
        <button onClick={checkInputValidity} > Submit </button>
      </div>

      <Calendar date={date} />
    </div>
  );
}

export default App;
