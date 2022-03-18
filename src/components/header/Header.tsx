import React from 'react';
import Image from '../logo-image/Logo';
import {Container,ChildContainer as Child} from './Header.styles';

const Header : React.FC =()=>{
  return(
    <Container >
      <Image/>
      <Child>
        <div>Inicio</div>
        <div>Como Funciona</div>
        <div>Serviços</div>
        <div>Quem Somos</div>
      </Child>
      <Child>
        <div>Inicio</div>
        <div>Como Funciona</div>
      </Child>
    </Container>
  )
}

export default Header;
