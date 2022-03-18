import React from 'react';
import Image from '../logo-image/Logo';
import {Container,ChildContainer as Child} from './Header.styles';
import Button from 'components/button/Button';
import Constants  from '../../international/pt-pt/constants.json';

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
        <Button isOutline={true} title={Constants.buttons.signin}/>
        <Button isOutline={false} title={Constants.buttons.signup}/>
      </Child>
    </Container>
  )
}

export default Header;
