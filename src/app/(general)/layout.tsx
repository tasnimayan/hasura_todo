"use client";
import Navbar from "../../components/Navbar";
import AsideNav from "./../../components/AsideNav";

import { NhostProvider } from "@nhost/nextjs";
import { nhost } from "@/lib/nhost";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={client}>
        <section>
          <div className="relative gap-0 md:gap-2 xl:gap-4 xs:flex xs:flex-col md:grid md:grid-cols-[260px,1fr] grid-rows-[4rem,1fr]">
            <div className="row-span-2">
              <AsideNav />
            </div>

            <Navbar />
            <div className="my-4 me-4 p-4 border-2 border-gray-200 border-dashed rounded-lg min-h-[calc(100vh-7rem)]">
              {children}
            </div>
          </div>
        </section>
      </ApolloProvider>
    </NhostProvider>
  );
}

export default DashboardLayout;
