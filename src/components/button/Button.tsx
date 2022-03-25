import React from 'react';
import * as MyButton from './Button.styles';
import {BsArrowRight as Arrow} from 'react-icons/bs';

export const Button : React.FC<{isOutline:boolean,title:string}> =(props)=>{

  return(
    <>
      <MyButton.Custom>
          <MyButton.Flex>
             <div>Entrar</div><Arrow/>
          </MyButton.Flex>
      </MyButton.Custom>
    </>

  )
}

export const IconButton : React.FC<{isOutline:boolean,title:string}> =(props)=>{
  return(
    <>
      <MyButton.Container>
        <MyButton.Flex>
            <div>Entrar</div><Arrow/>
        </MyButton.Flex>
      </MyButton.Container>
    </>

  )
}



