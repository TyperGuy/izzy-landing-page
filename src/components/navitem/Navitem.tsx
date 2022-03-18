import React from 'react';
import Styled from './Navitem.module.scss';
const Navitem : React.FC =()=>{

  return(
    <div className={Styled.dropdown}>
    <button className={Styled.dropbtn}>Dropdown</button>
    <div className={Styled.dropdownContent}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  )
}

export default Navitem;
