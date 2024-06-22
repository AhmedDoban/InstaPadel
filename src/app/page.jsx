"use client";
import { useState } from "react";
import Auth from "./(Auth)/Auth";
import Guest from "./(Guest)/Guest";

 function App() {
  const [Login , SetLogin ] = useState(false)
  return Login ? <Auth/> : <Guest/>;
}
export default  App