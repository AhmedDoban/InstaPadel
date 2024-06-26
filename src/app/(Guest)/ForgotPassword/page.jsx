"use client";
import "./ForgotPassword.css";
import { useState } from "react";
import Box1 from "./Box1/Box1.jsx";
import Box2 from "./Box2/Box2.jsx";
import Box3 from "./Box3/Box3.jsx";

function ForgotPassword() {
  const [BoxView, SetBoxView] = useState(1);
  return (
    <div className={`ForgotPassword BackGround${BoxView}`}>
      <div className="container">
        <div className="BallBox">
          {BoxView === 1 && <Box1 SetBoxView={SetBoxView} />}
          {BoxView === 2 && <Box2 SetBoxView={SetBoxView} />}
          {BoxView === 3 && <Box3 />}
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
