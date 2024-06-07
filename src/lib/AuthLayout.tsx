// /components/AuthLayout.tsx
import { ReactNode } from "react";
import { NhostProvider } from "@nhost/nextjs";
import { nhost } from "./nhost";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <NhostProvider nhost={nhost}>{children}</NhostProvider>;
};

export default AuthLayout;
