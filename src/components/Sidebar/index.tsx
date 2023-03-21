import Link from "next/link";
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import * as Styled from "./styles";

import ReactIcon from "@/icons/react";
import GridViewIcon from "@mui/icons-material/GridView";
import CollectionsIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import avatar from "public/profile.jpg";
import SubMenu from "./SidebarSubMenu";
import MenuItem from "./SidebarMenuItem";
import SidebarMenuAction from "./SidebarMenuAction";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Styled.Sidebar collapsed={collapsed}>
      <SidebarMenuAction collapsed={collapsed} setCollapsed={setCollapsed} />
      <SidebarHeader collapsed={collapsed} icon={<ReactIcon />}>
        CodingBR
      </SidebarHeader>

      <ul>
        <MenuItem collapsed={collapsed} icon={<GridViewIcon />} label={"Dashboard"} />
        <SubMenu collapsed={collapsed} icon={<CollectionsIcon />} label={"Category"}>
          <li>
            <Link href={"#"}>HTML & CSS</Link>
          </li>
          <li>
            <Link href={"#"}>JavaScript</Link>
          </li>
          <li>
            <Link href={"#"}>Python</Link>
          </li>
          <li>
            <Link href={"#"}>Pascal</Link>
          </li>
          <li>
            <Link href={"#"}>Java</Link>
          </li>
          <li>
            <Link href={"#"}>Assembly</Link>
          </li>
        </SubMenu>
        <SubMenu collapsed={collapsed} icon={<DynamicFeedIcon />} label={"Posts"}>
          <li>
            <Link href={"#"}>Web Design</Link>
          </li>
          <li>
            <Link href={"#"}>Login Form</Link>
          </li>
          <li>
            <Link href={"#"}>Card Design</Link>
          </li>
        </SubMenu>
      </ul>
      <SidebarFooter collapsed={collapsed} avatar={avatar} username={"Admin XPTO"} email={"admin@xpto.com"} />
    </Styled.Sidebar>
  );
}

export default Sidebar;
