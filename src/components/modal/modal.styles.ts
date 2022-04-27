import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  z-index: 50000;
  background-color: #9C9C9C85;
  background: transparent;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  .close {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`

export const Content = styled.div`
  width: 400px;
  height: 330px;
  background-color: #fff;
  position: relative;
  margin: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  border-radius: 8px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`
export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`
export const Description = styled.p`
  font-size: 0.8rem;
  width: 80%;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`

export const Button = styled.button`
  width: 200px;
  height: 40px;

  background: #820ad1;
  border: none;
  color: #fff;
  border-radius: 8px;
`
