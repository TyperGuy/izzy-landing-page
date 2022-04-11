import React from 'react';
import Styled from './Navitem.module.scss';
import Lisitem  from 'components/listitem/Listitem';
import {BsChevronDown as Arrow} from 'react-icons/bs';

import data from './data/Menu.file.json';





const Navitem : React.FC =()=>{




  return(
    <div className={Styled.dropdown}>
    <div className={Styled.dropbtn}>
      <span>Até onde vamos?</span>
      {(1+1==2)&&<Arrow className={Styled.arrow}/>}
    </div>
    {(1+1==2)&&
    <div className={Styled.dropdownContent}>
      <h1 style={{margin:"30px 25px  5px"}}>Seguros Disponiveis</h1>
      {
        data.map((Item)=>{
          return(
            <Lisitem {...Item} key={Item.key}/>
          )
        })
      }
    </div>
    }
  </div>
  )
}

export default Navitem;
