"use client";
import Image from "next/image";
import "./SummaryModel.css";
import { useRef } from "react";
import Select from "react-dropdown-select";

function SummaryModel({
  SetSummaryDetailsModel,
  SetUserDetailsModel,
  SetSummaryResultModel,
}) {
  const PopUpSummaryRef = useRef();
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];
  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (PopUpSummaryRef.current !== null) {
        if (e.target == PopUpSummaryRef.current) {
          SetSummaryDetailsModel(false);
        }
      }
      return () => {};
    });
  }

  return (
    <div className="SummaryModelPopup" ref={PopUpSummaryRef}>
      <div className="Summary-details-box">
        <h1>Match summary</h1>
        <div className="competition-box">
          <div className="user-box">
            <span>P1</span>
            <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
            <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
          </div>
          <div className="vs">
            <Image src="/Matches/VS.svg" width={50} height={50} alt="VS" />
          </div>
          <div className="user-box">
            <span>P2</span>
            <Image src="/User/User1.jpeg" width={30} height={30} alt="User" />
            <h4 onClick={() => SetUserDetailsModel(true)}>Ali Ahmad</h4>
          </div>
        </div>
        <div className="sets-box">
          <div className="sets-input">
            <label htmlFor="">Sets</label>
            <Select
              options={options}
              placeholder="No.sets"
              dropdownPosition="auto"
              style={{
                border: `1px solid #E7E8E9`,
                outline: 0,
                color: "#545f71",
                height: "50px",
                borderRadius: "10px",
                paddingLeft: "20px",
              }}
            />
          </div>
          <div className="sets-input">
            <label htmlFor="">Sets</label>
            <Select
              options={options}
              placeholder="No.sets"
              dropdownPosition="auto"
              style={{
                border: `1px solid #E7E8E9`,
                outline: 0,
                color: "#545f71",
                height: "50px",
                borderRadius: "10px",
                paddingLeft: "20px",
              }}
              className="DropDownSelect"
            />
          </div>
        </div>
        <div className="sets-action-box">
          <button className="Clear">Clear</button>
          <button className="Apply" onClick={() => SetSummaryResultModel(true)}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
export default SummaryModel;
