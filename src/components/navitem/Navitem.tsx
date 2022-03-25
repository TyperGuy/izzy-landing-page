import React from 'react';
import Styled from './Navitem.module.scss';
import Lisitem  from 'components/listitem/Listitem';
import {BsChevronDown as Arrow} from 'react-icons/bs';


const Navitem : React.FC =()=>{

 
  return(
    <div className={Styled.dropdown}>
    <div className={Styled.dropbtn}>
      <span>Dropdown</span>
      {(1+1==2)&&<Arrow className={Styled.arrow}/>}
    </div>
    {(1+1==2)&&
    <div className={Styled.dropdownContent}>
      <h1 style={{margin:"30px 25px  5px"}}>Seguros Disponiveis</h1>
      <Lisitem/>
      <Lisitem/>
      <Lisitem/>
      <Lisitem/>
    </div>
    }
  </div>
  )
}

export default Navitem;
