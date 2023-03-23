import * as Styled from "./styles";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { SidebarContext } from "../SidebarContext";

interface ISidebarFooterProps {
  avatar: StaticImageData;
  username: string;
  email: string;
}

function SidebarFooter({ avatar, username, email }: ISidebarFooterProps) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <Styled.StyledSidebarFooter collapsed={collapsed}>
      <Link href={"#"}>
        <Image src={avatar} alt="avatar" />
      </Link>
      <div className={"details"}>
        <div>
          <h2>{username}</h2>
          <p>{email}</p>
        </div>
        <Link href={"#"}>
          <LogoutIcon />
        </Link>
      </div>
    </Styled.StyledSidebarFooter>
  );
}

export default SidebarFooter;
