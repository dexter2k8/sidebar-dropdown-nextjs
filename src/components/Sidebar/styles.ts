import styled from "styled-components";
import { colors, sizes } from "./settings";

import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";

function Width() {
  const { collapsed } = useContext(SidebarContext);
  return collapsed ? sizes.collapsed : sizes.expanded;
}

function Overflow() {
  const { collapsed } = useContext(SidebarContext);
  return collapsed ? "visible" : "auto";
}

export const Sidebar = styled.nav`
  position: relative;
  min-width: ${Width};
  max-width: ${Width};
  transition: all 0.3s ease;
  height: 100%;
  background: ${colors.background};
  color: ${colors.font};

  * {
    text-decoration: none;
    list-style: none;
  }

  ul {
    position: relative;
    font-size: 20px;
    /* *** TAMANHO DO MENU NA TELA (TELA - HEADER - FOOTER) *** */
    max-height: calc(100vh - 60px - 76px);
    overflow: ${Overflow};
    ::-webkit-scrollbar {
      display: none;
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
