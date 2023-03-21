import styled from "styled-components";
import { colors, sizes } from "../settings";

interface IStyledProps {
  collapsed: boolean;
}

export const StyledSubMenu = styled.li<IStyledProps>`
  position: relative;

  a:hover {
    background: ${colors.hover};
    opacity: 1;
  }

  figure {
    height: 50px;
    min-width: ${sizes.collapsed};
    text-align: center;
    line-height: 65px;
    transition: all 0.3s ease;
  }

  a,
  div {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
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
    /* *** EXIBIÇÃO DA ABA LATERAL *** */
    ${({ collapsed }) =>
      collapsed &&
      `
          position: absolute;
          left: calc(100% - 4px);
          top: -10px;
          z-index: 100;
          background: ${colors.dropdown};
          overflow: hidden;
          border-radius: 8px;
          padding: 10px 0;
          opacity: 0;
          pointer-events: none; 
          max-height: 100vh;       
          a, span{
            padding: 10px 30px;            
          }
          `}
    li {
      a {
        padding: ${({ collapsed }) => !collapsed && "5px 80px"};
        font-size: 15px;
        white-space: nowrap;
        opacity: 0.6;
      }
      li {
        span {
          line-height: 40px;
          pointer-events: none;
        }
      }
    }
  }
`;
