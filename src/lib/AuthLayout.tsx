"use client";

import "./App.css";
import { NhostProvider } from "@nhost/nextjs";
import { useEffect, useState } from "react";
import { nhost } from "./nhost";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(nhost.auth.getSession());

    nhost.auth.onAuthStateChanged((_, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NhostProvider nhost={nhost}>
      {session ? <Todos session={session} /> : <SignIn />}
    </NhostProvider>
  );
}

export default App;
