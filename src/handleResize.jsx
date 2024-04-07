import { useState,useEffect } from "react";
function Resize(){
  const [width,setwidth]=useState(window.innerWidth);
  const [height,setheight]=useState(window.innerHeight);
useEffect(()=>{
  window.addEventListener("resize",handleresize)
},[])

  function handleresize(){
    setheight(window.innerHeight)
    setwidth(window.innerWidth)
  }
  return(
    <>
    <h2>Width:{width}</h2>
    <h2>height:{height}</h2>
    </>
  )

}
export default Resize