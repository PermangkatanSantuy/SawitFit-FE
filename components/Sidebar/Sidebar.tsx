import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function SidebarApp() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}

export function Sidebar({ children }: WrapperProps) {
  return <div>{children}</div>;
}

export function SidebarHeader() {
  return (
    <div className="flex bg-(--color-bg-light)">
      <div className="flex flex-row items-center justify-start gap-(--spacing-tiny) w-full px-5 py-2 bg-(--color-bg-light)">
        <div className="w-10 h-10 bg-(--color-bg-light-alt)"></div>
        <div className="w-40 h-4 bg-(--color-bg-light-alt)"></div>
      </div>
    </div>
  );
}

export function SidebarContent({ children }: WrapperProps) {
  return (
    <div className="flex flex-col fixed items-center p-4 gap-4 h-screen bg-(--color-bg-light-alt)">
      {children}
    </div>
  );
}

export function SidebarGroup() {
  return (
    <div className="flex flex-row items-center justify-start gap-(--spacing-tiny) w-full px-5 py-2 bg-(--color-bg-light)">
      <div className="w-10 h-10 bg-(--color-bg-light-alt)"></div>
      <div className="w-40 h-4 bg-(--color-bg-light-alt)"></div>
    </div>
  );
}
