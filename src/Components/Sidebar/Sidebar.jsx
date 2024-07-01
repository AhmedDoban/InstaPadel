import Image from "next/image";
import "./Sidebar.css";
import NavLink from "./NavLink";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="box">
        <Image src={"/favicon.png"} width={50} height={50} alt="Logo" />
        <h1>Instapadel</h1>
      </div>
      <ul>
        <li>
          <NavLink href="/">
            <Image
              src={"/Sidebar/Dashboards.svg"}
              width={23}
              height={23}
              alt="Dashbord"
            />
            <span>Dashboards</span>
          </NavLink>
        </li>
        <li>
          <NavLink href="/CreateTournament">
            <Image
              src={"/Sidebar/CreateTournament.svg"}
              width={23}
              height={23}
              alt="Dashbord"
            />
            <span>Create Tournament</span>
          </NavLink>
        </li>
        <li>
          <NavLink href="/MyTournaments">
            <Image
              src={"/Sidebar/MyTournaments.svg"}
              width={23}
              height={23}
              alt="Dashbord"
            />
            <span>My Tournaments</span>
          </NavLink>
        </li>
        <li>
          <NavLink href="/ContactUs">
            <Image
              src={"/Sidebar/ContactUs.svg"}
              width={23}
              height={23}
              alt="Dashbord"
            />
            <span>Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
