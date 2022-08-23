import {useState} from 'react'

function InputHook() {
    const [color,setColor]=useState("");

    function handelColors(e){
      setColor(e.target.value);
    }
  return {
    value:color,
    onChange:handelColors
  }
    
 
}

export {InputHook};