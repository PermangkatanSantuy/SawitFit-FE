"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function TopbarApp() {
  return (
    <Topbar>
      <TopbarContent> </TopbarContent>
      <TopbarContent>
        <TopbarNavigation />
        <TopbarNavigation />
        <TopbarNavigation />
        <TopbarNavigation />
      </TopbarContent>
      <TopbarProfile />
    </Topbar>
  );
}

export function Topbar({ children }: WrapperProps) {
  return (
    <div className="flex items-center justify-between w-full w-full px-(--spacing-medium-small) py-(--spacing-medium) bg-(--color-bg-light) font-(--font-sans)">
      {children}
    </div>
  );
}

export function TopbarContent({ children }: WrapperProps) {
  return <nav className="flex gap-(--spacing-huge)">{children}</nav>;
}

export function TopbarNavigation() {
  return <Link href="" className="w-30 h-10 bg-gray-300"></Link>;
}

export function TopbarProfile() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-300">
      <h2 className="heading-2 text-(--color-bg-light)">U</h2>
    </div>
  );
}
