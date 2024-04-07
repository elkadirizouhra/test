import { useState, useEffect } from "react";
function Compteur(){
    const [compte,setCompte]=useState(0);
    const [color,setColor]=useState("green");
    function Compter(){
        setCompte(c=>c+1);

    }
   function Substruct(){
    setCompte(c=>c-1);
   }
    function ChangeColor(){
        setColor(color=>color==="green"? "red" : "green");
    }
    useEffect(()=>{
        document.title=`voile le compte : ${compte} et le coleur ${color}`
    },[color,compte]) // runs only one mount
    // document.title=`voile le compte : ${compte}`
    // },[compte]) // runs only one mount+when the value change
    // useEffect(()=>{
    //     document.title=`voile le compte : ${compte}`
    // })  ::::: si on veut que l"effect se changer avec chaque rerendering
    
    return(
        <>

        <h2 style={{color:color}}>Compteur</h2>
        <p>compte:{compte}</p>
        <button onClick={Compter}>Add</button>
        <button onClick={Substruct}>Substruct</button>
        <button onClick={ChangeColor}>Change the color</button>
        </>
    )
}
export default Compteur