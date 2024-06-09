"use client";
import NavAuth from "./NavAuth";

import { NhostProvider } from "@nhost/nextjs";
import { nhost } from "@/lib/nhost";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NhostProvider nhost={nhost}>
        <NavAuth />
        {children}
      </NhostProvider>
    </section>
  );
}
