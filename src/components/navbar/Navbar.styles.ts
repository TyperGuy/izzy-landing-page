import styled from "styled-components";

// Styled component named StyledButton
export const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  gap:1.5rem;
  cursor: pointer;
`;

export const Btn = styled.span`
  font-size: 16px;
  transition: all .3s ease-in-out;
  &:hover{
    color: #820ad1;
  }
`;


