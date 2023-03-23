import * as Styled from "../SidebarSubMenu/styles";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "../SidebarContext";

interface IMenuItemProps {
  icon: JSX.Element;
  label: string;
}

function MenuItem({ icon, label }: IMenuItemProps) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <Styled.StyledSubMenu collapsed={collapsed}>
      <Link href={"#"}>
        <div>
          <figure>{icon}</figure>
          <span>{label}</span>
        </div>
      </Link>
      <ul>
        {collapsed && (
          <li>
            <span>{label}</span>
          </li>
        )}
      </ul>
    </Styled.StyledSubMenu>
  );
}

export default MenuItem;
