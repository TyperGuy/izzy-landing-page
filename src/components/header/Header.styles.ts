import styled from "styled-components";

// Styled component named StyledButton
export const Container = styled.div`
  max-width: 1222px;
  width: 1222px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  gap:1.5rem;
  cursor: pointer;
`;

export const Btn = styled.span`
  font-weight: bold;
  font-size:1.1rem;
  &:hover{
    color: #820ad1;
  }
`;

export const a = styled.a`
  font-weight: bold;
  font-size:1.1rem;
  color: #2d2d2d;
  &:hover{
    color: #820ad1;
  }
`;





