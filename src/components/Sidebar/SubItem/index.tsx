import Link from "next/link";
import * as Styled from "./styles";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";

interface ISidebarMenuProps {
  children: React.ReactNode;
}
function SubItem({ children }: ISidebarMenuProps) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <Styled.StyledSubItem collapsed={collapsed}>
      <Link href={"#"}>{children}</Link>
    </Styled.StyledSubItem>
  );
}

export default SubItem;
