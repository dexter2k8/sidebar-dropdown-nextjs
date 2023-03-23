import * as Styled from "./styles";
import { SidebarContext } from "../SidebarContext";
import { useContext } from "react";

interface ISidebarHeaderProps {
  icon?: JSX.Element;
  children?: React.ReactNode;
}

function SidebarHeader({ icon, children }: ISidebarHeaderProps) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <Styled.StyledSidebarHeader collapsed={collapsed}>
      {icon}
      <span>{children}</span>
    </Styled.StyledSidebarHeader>
  );
}

export default SidebarHeader;
