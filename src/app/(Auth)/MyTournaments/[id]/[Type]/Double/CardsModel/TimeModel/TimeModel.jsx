"use client";
import Image from "next/image";
import "./TimeModel.css";
import { useRef } from "react";

function TimeModel({ SetTimerModel }) {
  const TimeModelref = useRef();

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (TimeModelref.current !== null) {
        if (e.target == TimeModelref.current) {
          SetTimerModel(false);
        }
      }
      return () => {};
    });
  }
  return (
    <div className="TimeModel" ref={TimeModelref}>
      <div className="TimeModel-details-box">
        <div className="TimeHead">
          <span>09:42</span>
          <Image src="/Matches/clock.svg" width={25} height={25} alt="Clock" />
        </div>
        <div className="TimeBody">
          <div className="sets-input">
            <label htmlFor="DateMatch">Date of the match</label>
            <div className="input-box">
              <input type="date" name="DateMatch" id="DateMatch" />
            </div>
          </div>
          <div className="sets-box">
            <div className="sets-input">
              <label htmlFor="Hour">Hour</label>
              <div className="input-box">
                <input
                  type="number"
                  name="Hour"
                  id="Hour"
                  min={0}
                  max={24}
                  placeholder="1 Hour"
                />
                <Image
                  src="/Matches/clock.svg"
                  width={20}
                  height={20}
                  alt="Clock"
                />
              </div>
            </div>
            <div className="sets-input">
              <label htmlFor="Minute">Minute</label>
              <div className="input-box">
                <input
                  type="number"
                  name="Minute"
                  id="Minute"
                  min={0}
                  max={60}
                  placeholder="60 min"
                />
                <Image
                  src="/Matches/clock.svg"
                  width={20}
                  height={20}
                  alt="Clock"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sets-action-box">
          <button className="Clear">Clear</button>
          <button className="Apply">Apply</button>
        </div>
      </div>
    </div>
  );
}
export default TimeModel;
