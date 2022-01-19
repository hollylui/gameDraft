import { useState } from "react";
import UserProvider from "context/PageIndexProvider";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  );
}

export default MyApp;
