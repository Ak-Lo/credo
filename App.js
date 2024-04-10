import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import LandingView from "./components/landingView";
import BottomMenu from "./components/bottomMenu";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BottomMenu />
  );
}
