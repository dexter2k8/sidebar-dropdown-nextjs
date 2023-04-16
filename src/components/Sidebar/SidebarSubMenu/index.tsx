import * as Styled from "./styles";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";

interface ISubMenuProps {
  icon: JSX.Element;
  label: string;
  children: React.ReactNode;
}

function SubMenu({ icon, label, children }: ISubMenuProps) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <Styled.StyledSubMenu collapsed={collapsed}>
      <Link onClick={(e) => e.currentTarget.parentElement!.classList.toggle("show")} href={"#"}>
        <div>
          <figure>{icon}</figure>
          <span>{label}</span>
        </div>
        <figure>
          <ArrowRightIcon />
        </figure>
      </Link>
      <ul>
        {collapsed && (
          <li>
            <span>{label}</span>
          </li>
        )}
        {children}
      </ul>
    </Styled.StyledSubMenu>
  );
}

export default SubMenu;
