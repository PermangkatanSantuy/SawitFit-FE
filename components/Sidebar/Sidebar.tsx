"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

interface SidebarGroupProps {
  name: string;
  href: string;
}

export default function SidebarApp() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup name="Dashboard" href="/dashboard" />
        <SidebarGroup name="Nutrition" href="/dashboard/nutrition" />
        <SidebarGroup name="Workout" href="/dashboard/workout" />
        <SidebarGroup name="Social" href="/dashboard/social" />
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
    <nav className="flex flex-col items-center p-4 gap-4 h-screen bg-(--color-bg-light-alt)">
      {children}
    </nav>
  );
}

export function SidebarGroup({ name, href }: SidebarGroupProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex flex-row items-center justify-start gap-(--spacing-tiny) w-full px-5 py-2 ${
        isActive
          ? "border-(--color-bg-light) border-3"
          : "bg-(--color-bg-light)"
      }`}
    >
      <div className={`w-10 h-10 ${isActive ? "bg-white" : "bg-gray-300"}`} />
      <div className={`w-40 h-4 ${isActive ? "bg-white" : "bg-gray-300"}`} />
    </Link>
  );
}
