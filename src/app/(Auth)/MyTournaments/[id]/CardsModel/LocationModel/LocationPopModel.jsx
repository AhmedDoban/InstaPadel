"use client";
import Image from "next/image";
import "./LocationPopModel.css";
import { useRef } from "react";
import Select from "react-dropdown-select";
import MainTitle from "@/Components/MainTitle/MainTitle";

function LocationPopModel({ SetLocationModel }) {
  const LocationModelref = useRef();
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (LocationModelref.current !== null) {
        if (e.target == LocationModelref.current) {
          SetLocationModel(false);
        }
      }
      return () => {};
    });
  }
  return (
    <div className="LocationPopModel" ref={LocationModelref}>
      <div className="LocationPopModel-details-box">
        <div className="TimeHead">
          <MainTitle Color="#004077" Weight={600} FontSize="24px">
            Edit location
          </MainTitle>
        </div>
        <div className="TimeBody">
          <div className="sets-input">
            <label htmlFor="DateMatch">Location</label>
            <div className="DropdownSelect-box">
              <Image
                src="/Draw/location.svg"
                width={20}
                height={20}
                alt="location"
              />
              <div className="DropdownSelect">
                <Select
                  options={options}
                  placeholder="Select a location"
                  dropdownPosition="auto"
                  style={{
                    border: 0,
                    outline: 0,
                    color: "#545f71",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sets-box">
            <div className="sets-input">
              <label htmlFor="Link">Location Link</label>
              <div className="input-box">
                <Image src="/Draw/link.svg" width={20} height={20} alt="link" />
                <input
                  type="text"
                  name="Link"
                  id="Link"
                  placeholder="Location Link"
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
export default LocationPopModel;
