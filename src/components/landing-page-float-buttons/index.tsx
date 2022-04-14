import { FC } from 'react';
import { Container } from './landing-page-float-buttons.styles'

export const FloatingButton: FC<{ isOnBottom: boolean }> = ({ isOnBottom }) => {
  const sendToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return(
    <Container isOnBottom={isOnBottom}>
      <div className="wrapper">
        <img
          src="/icons8-acima.png"
          alt="send to top"
          className="icon"
          onClick={() => sendToTop()}
          />
        <a href="https://web.whatsapp.com/" target="_blank">
          <img src="/icons8-whatsapp.svg" alt="whatsApp"  className="icon"/>
        </a>
      </div>
    </Container>
  )
}

export default FloatingButton;
