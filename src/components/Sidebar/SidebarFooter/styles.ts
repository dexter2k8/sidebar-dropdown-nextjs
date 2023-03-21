import styled from "styled-components";
import { colors } from "../settings";

interface IStyledProps {
  collapsed: boolean;
}

export const StyledSidebarFooter = styled.footer<IStyledProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.dropdown};
  font-size: 12px;
  color: ${colors.font};
  padding: 12px 14px;

  a {
    display: flex;
    align-items: center;
  }

  a img {
    height: 52px;
    width: 52px;
    object-fit: cover;
    border-radius: 50%;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  .details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};
    transition: all 0.4s ease;
  }
`;
