import styled from "styled-components";
import { colors, sizes } from "./settings";

interface IStyledProps {
  collapsed: boolean;
}

export const Sidebar = styled.nav<IStyledProps>`
  position: relative;
  min-width: ${({ collapsed }) => (collapsed ? sizes.collapsed : sizes.expanded)};
  max-width: ${({ collapsed }) => (collapsed ? sizes.collapsed : sizes.expanded)};
  transition: all 0.3s ease;
  height: 100vh;
  background: ${colors.background};
  color: ${colors.font};

  ul {
    position: relative;
    font-size: 20px;
    /* *** TAMANHO DO MENU NA TELA (TELA - HEADER - FOOTER) *** */
    max-height: calc(100vh - 60px - 76px);
    overflow: ${({ collapsed }) => (collapsed ? "visible" : "auto")};
    ::-webkit-scrollbar {
      display: none;
    }

    .show figure:last-child {
      transform: rotate(180deg);
    }
    .show ul {
      max-height: ${({ collapsed }) => (collapsed ? "100vh" : "200px")};
    }

    li:hover {
      ul {
        top: 0;
        opacity: 1;
        pointer-events: auto;
        transition: all 0.4s ease;
      }
    }
  }
`;
