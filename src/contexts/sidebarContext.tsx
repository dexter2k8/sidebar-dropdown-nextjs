import { ReactNode, useState, createContext } from "react";

interface ISidebarContext {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISidebarContextProps {
  children: ReactNode;
}

export const SidebarContext = createContext({} as ISidebarContext);

function SidebarProvider({ children }: ISidebarContextProps) {
  const [collapsed, setCollapsed] = useState(true);
  return <SidebarContext.Provider value={{ collapsed, setCollapsed }}>{children}</SidebarContext.Provider>;
}

export default SidebarProvider;
