import Select from "react-dropdown-select";
import MainTitle from "@/Components/MainTitle/MainTitle";
import Image from "next/image";
import Link from "next/link";
import "./MultiRound.css";

function MultiRound({ ImageSrc, uploadImage, SetPageLoaded }) {
  const options = [
    { value: 1, label: "Cairo" },
    { value: 2, label: "Alexandria" },
    { value: 3, label: "Giza" },
    { value: 4, label: "Luxor" },
    { value: 5, label: "Aswan" },
    { value: 6, label: "Sharm El Sheikh" },
    { value: 7, label: "Hurghada" },
    { value: 8, label: "Dahab" },
    { value: 9, label: "Siwa" },
    { value: 10, label: "Fayoum" },
    { value: 11, label: "Marsa Alam" },
    { value: 12, label: "Port Said" },
    { value: 13, label: "Suez" },
    { value: 14, label: "Ismailia" },
    { value: 15, label: "Sohag" },
    { value: 16, label: "Mansoura" },
    { value: 17, label: "Tanta" },
    { value: 18, label: "Beni Suef" },
    { value: 19, label: "Minya" },
    { value: 20, label: "Zagazig" },
  ];

  return (
    <div className="Multi-Round">
      <div className="NaviGation">
        <Link href="/CreateTournament">Privacy</Link>
        <span>/</span>
        <Link className="Active" href="/CreateTournament/Multi-Round">
          Multi-Round
        </Link>
      </div>
      <MainTitle Weight="600" FontSize="24px">
        Multi-Round
      </MainTitle>
      <div className="Multi-Round-box">
        <div className="Multi-left">
          <label className="Image-Multi" htmlFor="TourMultiImage">
            <Image
              src={ImageSrc ? ImageSrc : "/CreateTournament/Avatar.svg"}
              alt="Multi"
              width={50}
              height={50}
            />
            <input
              type="file"
              name="TourMulti"
              id="TourMultiImage"
              hidden
              onChange={(e) => uploadImage(e)}
            />
            <div className="label-info">
              <span>
                <Image
                  src="/CreateTournament/Upload.svg"
                  width={20}
                  height={20}
                  alt="Upload"
                />
                Photo
              </span>
              <p>Jpg-png</p>
            </div>
          </label>
          <div className="Multi-box">
            <label htmlFor="TournamentName">Tournament Name</label>
            <div className="input-box">
              <label htmlFor="TournamentName">
                <Image
                  width={25}
                  height={25}
                  alt="flag"
                  src="/CreateTournament/flag.svg"
                />
              </label>
              <input
                type="text"
                name="TournamentName"
                id="TournamentName"
                placeholder="Tournament Name"
              />
            </div>
          </div>
          <div className="Multi-Flex">
            <div className="Multi-box">
              <label htmlFor="StartDate">Start Date</label>
              <div className="input-box">
                <input
                  type="date"
                  name="StartDate"
                  id="StartDate"
                  placeholder="Select a location"
                />
              </div>
            </div>
            <div className="Multi-box">
              <label htmlFor="EndDate">End Date</label>
              <div className="input-box">
                <input
                  type="date"
                  name="EndDate"
                  id="EndDate"
                  placeholder="Select a location"
                />
              </div>
            </div>
          </div>
          <div className="Multi-Flex">
            <div className="Multi-box">
              <label htmlFor="StartTime">Start Time</label>
              <div className="input-box">
                <input
                  type="time"
                  name="StartTime"
                  id="StartTime"
                  placeholder="Select a location"
                />
              </div>
            </div>
            <div className="Multi-box">
              <label htmlFor="EndTime">End Time</label>
              <div className="input-box">
                <input
                  type="time"
                  name="EndTime"
                  id="EndTime"
                  placeholder="Select a location"
                />
              </div>
            </div>
          </div>
          <div className="Multi-box">
            <label htmlFor="location ">location </label>
            <div className="input-boxDropdown">
              <Image
                width={25}
                height={25}
                alt="flag"
                src="/CreateTournament/location-marker.svg"
              />
              <div className="dropDownSelect-box">
                <Select
                  options={options}
                  placeholder="Select a location"
                  dropdownPosition="auto"
                  style={{ border: 0, outline: 0, color: "#545f71" }}
                  className="DropDownSelect"
                />
              </div>
            </div>
          </div>
          <div className="Multi-box">
            <label htmlFor="locationlink">location link</label>
            <div className="input-box">
              <label htmlFor="locationlink">
                <Image
                  width={25}
                  height={25}
                  alt="flag"
                  src="/CreateTournament/link.svg"
                />
              </label>

              <input
                type="text"
                name="locationlink"
                id="locationlink"
                placeholder="location link"
              />
            </div>
          </div>
          <div className="Multi-box">
            <button onClick={() => SetPageLoaded(2)}>Next</button>
          </div>
        </div>
        <div className="Multi-right">
          <span>Multi-Round</span>
        </div>
      </div>
    </div>
  );
}
export default MultiRound;
