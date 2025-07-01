import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      {children}
    </div>
  );
}
