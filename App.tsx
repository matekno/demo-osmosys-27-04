import Main from './main';
import React, { useEffect, useState } from "react";
import { loadFonts } from "osmosys-ui";

export default function App() {
  // Add these lines in your main file to properly import the fonts
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    (async () => {
      await loadFonts(setLoadingComplete);
    })();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }

  return <Main />;
}