import React from 'react';
import Constants  from 'international/pt-pt/constants.json';
import {ChildContainer as Nav,Btn} from './Navbar.styles';
import  Item from 'components/navitem/Navitem';
const Navbar : React.FC =()=>{

  return(
   <Nav>
     <Item/>
     <Btn>Services</Btn>
     <Btn>Download</Btn>
     <Btn>FQA</Btn>
   </Nav>
  )
}

export default Navbar;
