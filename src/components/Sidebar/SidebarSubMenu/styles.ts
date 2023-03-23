import styled from "styled-components";
import { colors, sizes } from "../settings";

interface IStyledProps {
  collapsed: boolean;
}

export const StyledSubMenu = styled.li<IStyledProps>`
  position: relative;
  white-space: nowrap;

  &.show figure:last-child {
    transform: rotate(90deg);
  }

  &.show ul {
    max-height: ${({ collapsed }) => (collapsed ? "100%" : "200px")};
  }

  a:hover {
    background: ${colors.hover};
    opacity: 1;
  }

  figure {
    height: 50px;
    min-width: ${sizes.collapsed};
    text-align: center;
    line-height: 65px;
  }

  a,
  div {
    display: flex;
    align-items: center;
  }

  a {
    justify-content: space-between;
    overflow: hidden;
    div span,
    figure:last-child {
      opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};
      transition: all 0.3s ease;
    }
  }

  ul {
    max-height: 0;
    background: ${colors.dropdown};
    /* *** EXIBIÇÃO DA ABA LATERAL *** */
    ${({ collapsed }) =>
      collapsed &&
      `
          position: absolute;
          left: 100%;
          top: -10px;
          z-index: 100;
          background: ${colors.background};
          overflow: hidden;
          border-radius: 8px;
          padding: 10px 0;
          opacity: 0;
          pointer-events: none; 
          max-height: 100vh;       
          a, span {
            color: ${colors.font};
            padding: 10px 30px;
            white-space: nowrap;            
          }
          `}
    li {
      span {
        line-height: 40px;
        pointer-events: none;
      }
    }
  }
`;
