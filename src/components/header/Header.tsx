import React from 'react';
import Image from '../logo-image/Logo';
import {Container,ChildContainer as Child} from './Header.styles';
import {IconButton} from 'components/button/Button';
import Constants  from 'international/pt-pt/constants.json';
import Navbar from 'components/navbar/Navbar';

const Header : React.FC =()=>{

  return(
    <Container >
      <Image/>
      <Navbar/>
      <Child>
        <IconButton isOutline={false} title={Constants.buttons.signup}/>
      </Child>
    </Container>
  )
}

export default Header;
