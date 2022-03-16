import React from 'react';
import Image from '../logo-image/Logo';

const Header : React.FC =()=>{
  return(
    <div className="flex flex-row items-center">
      <Image/>
      <ul className="list-disc">
        <li>Now this</li>
      </ul>
    </div>
  )
}

export default Header;
