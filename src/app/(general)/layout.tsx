"use client";
import Navbar from "../../components/Navbar";
import AsideNav from "./../../components/AsideNav";

import { useAuthenticationStatus } from "@nhost/nextjs";
import { ApolloProvider } from "@apollo/client";
import { useState, useEffect } from "react";
import createApolloClient from "@/lib/apolloClient";
import Loading from "@/components/Loading";
import { redirect } from "next/navigation";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [client, setClient] = useState<any>(null);
  const { isLoading, isAuthenticated } = useAuthenticationStatus();

  useEffect(() => {
    const initializeClient = async () => {
      if (!isLoading && isAuthenticated) {
        const apolloClient = createApolloClient();
        setClient(apolloClient);
      }
    };

    initializeClient();
  }, [isLoading, isAuthenticated]);

  if (!client) {
    return <Loading />;
  }
  return (
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
  );
}

export default DashboardLayout;
