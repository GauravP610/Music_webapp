import React from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
//import { MdFavorite } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
//import apiClient from "../../spotify";
import Image from './logo2.jpg';

export default function Sidebar() {
  // const [image, setImage] = useState(
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  // );

  // useEffect(() => {
  //   apiClient.get("me").then((response) => {
  //     setImage(response.data.images[0].url);
  //   });
  // }, []);

  const handleSignOut = () => {

    console.log("Sign Out button clicked");
    const token = window.localStorage.getItem("token");
    if (token) {
      window.localStorage.removeItem("token");
      console.log("Token removed from local storage");
    } else {
      console.log("No token found in local storage");
    }

    window.location.reload();
  };

  return (
    <div className="sidebar-container">
      <div className="profile-container">
        <img src={Image} className="logo-img" alt="logo" />
        <span className="profile-text">MusicLy</span>
      </div>
      {/* <img src={image} className="profile-img" alt="profile" /> */}
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        {/* <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} /> */}
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        {/* <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} /> */}
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" onClick={handleSignOut} to="" icon={<FaSignOutAlt />} />
    </div>
  );
}


