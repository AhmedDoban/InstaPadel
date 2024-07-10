"use client";
import Image from "next/image";
import "./ResultSummary.css";
import { useRef } from "react";

function ResultSummary({ SetSummaryResultModel }) {
  const SummaryResultPopup = useRef();

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (SummaryResultPopup.current !== null) {
        if (e.target == SummaryResultPopup.current) {
          SetSummaryResultModel(false);
        }
      }
      return () => {};
    });
  }

  return (
    <div className="SummaryResultPopup" ref={SummaryResultPopup}>
      <div className="Summary-details-box">
        <h1>Match summary</h1>
        <div className="competition-box">
          <div className="user-box">
            <span>T4</span>
            <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
            <h4>Ali Ahmad</h4>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="user-box">
            <span>T4</span>
            <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
            <h4>Ali Ahmad</h4>
          </div>
        </div>
        <div className="sets-box">
          <div className={"box-result loser"}>
            <h1>0 Sets</h1>
            <p>Hard luck</p>
          </div>
          <div className={"box-result winner"}>
            <h1>3 Sets</h1>
            <p>Winner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResultSummary;
