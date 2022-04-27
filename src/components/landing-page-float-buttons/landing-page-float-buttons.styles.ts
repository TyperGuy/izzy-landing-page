import styled from 'styled-components'

export const Container = styled.div<{ isOnBottom: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 6px;

  position: fixed;
  z-index: 20000;
  right: 20px;
  bottom: 20px;
  border-radius: 8px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px;
  transition: all 0.5s ease;

  .wrapper {
    position: relative !important;
    background-color: #fff;

    transition: all 0.5s ease;

    width: ${({ isOnBottom }) => isOnBottom ? '42px' : '80px'};
    height: ${({ isOnBottom }) => isOnBottom ? '80px' : '42px'};
  }

  .icon:first-child{
    transition: all 0.5s ease;
    right: 6px;
    bottom:  ${({ isOnBottom }) => isOnBottom ? '43px' : '6px'};
  }

  .icon:last-child{
    left: 6px;
    bottom: 6px;
  }

  .icon{
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
  }
`

