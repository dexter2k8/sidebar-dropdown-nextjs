import * as Styled from "./styles";
import Link from "next/link";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface ISubMenuProps {
  collapsed: boolean;
  icon: JSX.Element;
  label: string;
  children: React.ReactNode;
}

function SubMenu({ collapsed, icon, label, children }: ISubMenuProps) {
  return (
    <Styled.StyledSubMenu collapsed={collapsed}>
      <Link onClick={(e) => e.currentTarget.parentElement!.classList.toggle("show")} href={"#"}>
        <div>
          <figure>{icon}</figure>
          <span>{label}</span>
        </div>
        <figure>
          <ArrowDownIcon />
        </figure>
      </Link>
      <ul>
        <li>{collapsed && <span>{label}</span>}</li>
        {children}
      </ul>
    </Styled.StyledSubMenu>
  );
}

export default SubMenu;
