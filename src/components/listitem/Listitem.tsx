import React from 'react';
import Styled from './Listitem.module.scss';
import {FiArrowRight as Arrow} from 'react-icons/fi';
import {IoLayersSharp as Shape} from 'react-icons/io5';
const Menuitem : React.FC =()=>{

  
  return(
    <div className={Styled.container}>
      <div className={Styled.box}>
        <Shape className={Styled.Shape}/>
      </div>
      <div className={Styled.childContainer}>

        <div className={Styled.titleContainer}>
          <span className={Styled.title}>Este é o Titulo</span>
          <Arrow className={Styled.arrow}/>
        </div>
        <p className={Styled.wrapper}>Este é o conteudo que vamos usar como conteudo explicativo</p>
      </div>
    </div>
  )
}

export default Menuitem;
