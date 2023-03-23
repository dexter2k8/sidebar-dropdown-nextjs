import styled from "styled-components";

interface IStyledProps {
  collapsed: boolean;
}

export const StyledSubItem = styled.li<IStyledProps>`
  a {
    padding: ${({ collapsed }) => !collapsed && "5px 80px"};
    font-size: 15px;
    white-space: nowrap;
    opacity: 0.6;
  }
`;
