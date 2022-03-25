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
export const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  gap:1.5rem;
  cursor: pointer;
`;




