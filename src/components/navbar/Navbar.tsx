import React from 'react';
import Constants  from 'international/pt-pt/constants.json';
import {ChildContainer as Nav} from './Navbar.styles';
import  Item from 'components/navitem/Navitem';
const Navbar : React.FC =()=>{

  return(
   <Nav>
     <Item/>
     <div>Services</div>
     <div>Download</div>
     <div>FQA</div>
   </Nav>
  )
}

export default Navbar;
