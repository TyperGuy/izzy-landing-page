import React from 'react';
import * as MyButton from './Button.styles';


export const Button : React.FC<{isOutline:boolean,title:string}> =(props)=>{

  return(
    <>
      <MyButton.Container>
        Entrar
      </MyButton.Container>
    </>

  )
}

