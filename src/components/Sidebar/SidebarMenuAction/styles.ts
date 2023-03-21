import styled from "styled-components";

interface IStyledProps {
  collapsed: boolean;
}

export const StyledMenuAction = styled.div<IStyledProps>`
  position: absolute;
  left: 100%;
  transition: all 0.3s ease;
  padding: 10px 20px;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px 5px 0 5px;
  }
`;
