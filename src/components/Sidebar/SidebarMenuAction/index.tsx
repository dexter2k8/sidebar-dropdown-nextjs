import * as Styled from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Dispatch, SetStateAction } from "react";

interface ISidebarMenuProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

function SidebarMenuAction({ collapsed, setCollapsed }: ISidebarMenuProps) {
  return (
    <Styled.StyledMenuAction collapsed={collapsed}>
      <button onClick={() => setCollapsed(!collapsed)}>
        <MenuIcon fontSize="large" />
      </button>
    </Styled.StyledMenuAction>
  );
}

export default SidebarMenuAction;
