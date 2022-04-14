// @ts-nocheck
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';

import { Container, Content, Image, Title, Description, Button } from './modal.styles';

const Modal: FC<{ modalRef: any }> = ({ modalRef }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = useCallback((show: boolean) => setShowModal(show), [])

  useImperativeHandle(modalRef, () => ({
    handleShow,
  }))

  if(showModal) {
    return (
      <Container>
        <Content>
          <Image src="/cookie.png"/>
          <Title>Este site usa cookies :)</Title>

          <Description>
          Armazenamos dados temporariamente para melhorar sua experiência de navegação e recomendar conteúdo de seu interesse. Ao usar nossos serviços, você concorda com esse monitoramento.
          </Description>

        <Button onClick={() => handleShow(false)}>Entedo, aceitar</Button>
        </Content>
      </Container>
    )
  }

  return <></>

}

export default forwardRef(Modal);
