import styled from "styled-components";

// Styled component named StyledButton
export const Container = styled.div`
  padding: .8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: .6rem;
  color: white;
  font-weight: 500;
  border: 2px solid #820ad1;
  color: #820ad1;
  transition: all .3s ease-in-out;
  &:hover{
    background-color:#820ad1;
    color: #fff;
  }
`;
export const Custom = styled.div`
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: .2rem;
  color: white;
  font-weight: 500;
  background-color: #2D2D2D;
  color: #ffff;
  transition: all .3s ease-in-out;
  &:hover{
    background-color:#820ad1;
    color: #fff;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:1.5rem;
  cursor: pointer;
`;




