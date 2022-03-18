import React from 'react';
import Image from '../logo-image/Logo';


const Button : React.FC<{isOutline:boolean,title:string}> =(props)=>{

  return(
    <>
    { props.isOutline?
      <div style={{fontWeight:700}}>{props.title}</div>
      :
      <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
        {props.title}
      </button>
    }
    </>
  )
}

export default Button;
