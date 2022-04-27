import React from 'react';
import Image from '../logo-image/Logo';
import {Container,Btn,ChildContainer as Child,a as A} from './Header.styles';
import {IconButton} from 'components/button/Button';
import Constants  from 'international/pt-pt/constants.json';
import Navbar from 'components/navbar/Navbar';
import Link from 'next/link'

const Header : React.FC =()=>{

  return(
    <Container >
      <Image/>
      <Navbar/>
      <Child>
        <Btn><Link href="/login"><A>Entrar</A></Link></Btn>
        <IconButton isOutline={false} title={Constants.buttons.signup}/>
      </Child>
    </Container>
  )
}

export default Header;
