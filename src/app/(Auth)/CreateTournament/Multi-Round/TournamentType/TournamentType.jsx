import "./TournamentType.css";
import Select from "react-dropdown-select";
import Image from "next/image";
import Link from "next/link";
import MainTitle from "@/Components/MainTitle/MainTitle";

function TournamentType({
  SetPageLoaded,
  uploadImageType,
  ImageSrcType,
  TourState,
  SetTourState,
}) {
  const ParticipantsType = [
    { value: 1, label: "Recreational Players" },
    { value: 2, label: "Competitive Players" },
    { value: 3, label: "Fitness Enthusiasts" },
    { value: 4, label: "Social Players" },
    { value: 5, label: "Casual Players" },
  ];

  const Prizes = [
    { value: 1, label: "500$" },
    { value: 2, label: "1000$" },
    { value: 3, label: "1500$" },
    { value: 4, label: "2000$" },
  ];

  return (
    <div className="TournamentType">
      <div className="NaviGation">
        <Link href="/CreateTournament">Privacy</Link>
        <span>/</span>
        <Link
          href="/CreateTournament/Multi-Round"
          onClick={() => SetPageLoaded(1)}
        >
          Multi-Round
        </Link>
        <span>/</span>
        <Link className="Active" href="/CreateTournament/Multi-Round">
          Tournament Type
        </Link>
      </div>
      <MainTitle Weight="600" FontSize="24px">
        Tournament Type
      </MainTitle>
      <div className="TournamentType-box">
        <div className="Multi-left">
          <div className="Multi-Head">
            <label className="Image-Multi" htmlFor="TourMultiImage">
              <Image
                src={
                  ImageSrcType ? ImageSrcType : "/CreateTournament/Avatar.svg"
                }
                alt="Multi"
                width={50}
                height={50}
              />
              <input
                type="file"
                name="TourMulti"
                id="TourMultiImage"
                hidden
                onChange={(e) => uploadImageType(e)}
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

            <div className="input-toggle">
              <input
                type="checkbox"
                id="ChangeTourState"
                checked={TourState}
                hidden
                onChange={() => SetTourState(!TourState)}
              />
              <label htmlFor="ChangeTourState"></label>
              <p> {TourState ? "Singles" : "Doubles"}</p>
            </div>
          </div>

          <div className="Multi-box">
            <label htmlFor="ParticipantsType">Participants Type</label>
            <div className="input-boxDropdown">
              <div className="dropDownSelect-box">
                <Select
                  options={ParticipantsType}
                  placeholder="Participants Type"
                  dropdownPosition="auto"
                  style={{ border: 0, outline: 0, color: "#545f71" }}
                  className="DropDownSelect"
                />
              </div>
            </div>
          </div>
          <div className="Multi-box">
            <label htmlFor="levels">levels</label>
            <div className="input-box">
              <label htmlFor="levels">
                <Image
                  width={25}
                  height={25}
                  alt="flag"
                  src="/CreateTournament/levelS.svg"
                />
              </label>
              <input
                type="text"
                name="levels"
                id="levels"
                placeholder="levels The Number"
              />
            </div>
          </div>
          <div className="Multi-box">
            <label htmlFor="SubmissionDeadline">Submission Deadline</label>
            <div className="input-box">
              <input
                type="date"
                name="SubmissionDeadline"
                id="SubmissionDeadline"
              />
            </div>
          </div>
          <div className="Multi-box">
            <label htmlFor="Prizes">Prizes </label>
            <div className="input-boxDropdown">
              <Image
                width={25}
                height={25}
                alt="flag"
                src="/CreateTournament/Prize.svg"
              />
              <div className="dropDownSelect-box">
                <Select
                  options={Prizes}
                  placeholder="Select The Number"
                  dropdownPosition="auto"
                  style={{ border: 0, outline: 0, color: "#545f71" }}
                  className="DropDownSelect"
                />
              </div>
            </div>
          </div>
          <div className="Multi-box">
            <label htmlFor="Description">Description</label>
            <div className="input-box textArea">
              <textarea
                name="Description"
                id="Description"
                placeholder="....................."
                rows={5}
              />
            </div>
          </div>
          <div className="Multi-box">
            <button onClick={() => SetPageLoaded(2)}>Create Tournament</button>
          </div>
        </div>
        <div className={`Multi-right ${TourState ? "Singles" : "Doubles"}`}>
          <h1>
            Tournament
            <br />
            Type
          </h1>
          <span>{TourState ? "Singles" : "Doubles"}</span>
        </div>
      </div>
    </div>
  );
}
export default TournamentType;
