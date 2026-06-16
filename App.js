import React from "react";
import { StatusBar } from "expo-status-bar";
import NavegadorApp from "./src/navegacao/NavegadorApp";

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor="#5D20F5"
        translucent={false}
      />

      <NavegadorApp />
    </>
  );
}