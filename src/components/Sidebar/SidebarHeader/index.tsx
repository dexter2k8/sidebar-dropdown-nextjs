import * as Styled from "./styles";

interface ISidebarHeaderProps {
  icon?: JSX.Element;
  children?: React.ReactNode;
  collapsed: boolean;
}

function SidebarHeader({ collapsed, icon, children }: ISidebarHeaderProps) {
  return (
    <Styled.StyledSidebarHeader collapsed={collapsed}>
      {icon}
      <span>{children}</span>
    </Styled.StyledSidebarHeader>
  );
}

export default SidebarHeader;
