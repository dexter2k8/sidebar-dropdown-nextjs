import * as Styled from "./styles";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";

interface ISidebarFooterProps {
  collapsed: boolean;
  avatar: StaticImageData;
  username: string;
  email: string;
}

function SidebarFooter({ collapsed, avatar, username, email }: ISidebarFooterProps) {
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
