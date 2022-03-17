import React from 'react';
import Image from '../logo-image/Logo';

const Header : React.FC =()=>{
  return(
    <div style={{display: 'flex', alignItems:'center', backgroundColor:'red'}}>
      <Image/>
      <ul style={{display: 'flex', flexDirection: 'row', gap : '10px'}}>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
    </div>
  )
}

export default Header;
