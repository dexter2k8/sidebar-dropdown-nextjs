import * as Styled from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";

function SidebarMenuAction() {
  const { collapsed, setCollapsed } = useContext(SidebarContext);
  return (
    <Styled.StyledMenuAction collapsed={collapsed}>
      <button onClick={() => setCollapsed(!collapsed)}>
        <MenuIcon fontSize="large" />
      </button>
    </Styled.StyledMenuAction>
  );
}

export default SidebarMenuAction;
