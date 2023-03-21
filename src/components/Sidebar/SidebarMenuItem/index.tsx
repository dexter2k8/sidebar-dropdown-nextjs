import * as Styled from "../SidebarSubMenu/styles";
import Link from "next/link";

interface IMenuItemProps {
  collapsed: boolean;
  icon: JSX.Element;
  label: string;
}

function MenuItem({ collapsed, icon, label }: IMenuItemProps) {
  return (
    <Styled.StyledSubMenu collapsed={collapsed}>
      <Link href={"#"}>
        <div>
          <figure>{icon}</figure>
          <span>{label}</span>
        </div>
      </Link>
      <ul>
        <li>{collapsed && <span>{label}</span>}</li>
      </ul>
    </Styled.StyledSubMenu>
  );
}

export default MenuItem;
