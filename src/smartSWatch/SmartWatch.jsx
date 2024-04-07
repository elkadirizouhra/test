import { useState,useEffect } from "react"
import Casa from '../assets/casa.jpeg'
import './style.css'
function Watch(){
    const date= new Date();
    const [hour,setHour]=useState('')
    const [min,setmin]=useState('')
    const [sec,setsec]=useState('')
      const [mer,setmer]=useState('');

function Updatewatch(){
    const date = new Date();
    const updatedHour = date.getHours() % 12 || 12;
    const mer = date.getHours() >= 12 ? "PM" : "AM";
    setHour(updatedHour.toString().padStart(2, '0'));
    setmin(date.getMinutes().toString().padStart(2, '0'));
    setsec(date.getSeconds().toString().padStart(2, '0'));
    setMer(mer)
   
   
}

useEffect(() => {
    const intervalId = setInterval(Updatewatch, 1000);
    return () => clearInterval(intervalId);
}, [sec]);
  
    
    
    return(
<>
<img src={Casa} alt="casa"></img>
    <div class="watch">
        
        <div id="hour">{hour}:</div>
        <div id="minute">{min}:</div>
        <div id="seconde">{sec} </div>
        <div id="">{mer}</div>
        
    </div>
    
</> 
   
    )
}
export default Watch