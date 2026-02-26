import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function PageLayout({ children }: WrapperProps) {
  return (
    <div className="grid grid-cols-[max-content_1fr] overflow-hidden">
      {children}
    </div>
  );
}
