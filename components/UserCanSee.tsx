import { useCan } from "@/hooks/useCan";
import { ReactNode } from "react";

type CanProps = {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
};

export function UserCanSee({ children, permissions, roles }: CanProps) {
  const userCanSeeComponent = useCan({ permissions, roles });

  if (!userCanSeeComponent) {
    return null;
  }

  return <>{children}</>;
}
