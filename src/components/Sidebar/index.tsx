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
import SubItem from "./SubItem";
import SidebarProvider from "@/contexts/sidebarContext";

function Sidebar() {
  return (
    <SidebarProvider>
      <Styled.Sidebar>
        <SidebarMenuAction />

        <SidebarHeader icon={<ReactIcon />}>CodingBR</SidebarHeader>

        <ul>
          <MenuItem icon={<GridViewIcon />} label={"Dashboard"} />

          <SubMenu icon={<CollectionsIcon />} label={"Category"}>
            <SubItem>HTML & CSS</SubItem>
            <SubItem>Javascript</SubItem>
            <SubItem>Python</SubItem>
            <SubItem>Pascal</SubItem>
            <SubItem>Java</SubItem>
            <SubItem>Assembly</SubItem>
          </SubMenu>

          <SubMenu icon={<DynamicFeedIcon />} label={"Posts"}>
            <SubItem>Web Design</SubItem>
            <SubItem>Login Form</SubItem>
            <SubItem>Card Design</SubItem>
          </SubMenu>
        </ul>

        <SidebarFooter avatar={avatar} username={"Admin XPTO"} email={"admin@xpto.com"} />
      </Styled.Sidebar>
    </SidebarProvider>
  );
}

export default Sidebar;
