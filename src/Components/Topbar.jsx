import { FaBell, FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <header className="topbar">
      <div className="search-box">
        <FaSearch className="icon" />
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="topbar-icons">
        <FaBell className="icon" />
        <img src="https://i.pravatar.cc/40"alt="profile" className="profile"/>
      </div>
    </header>
  );
}

export default Topbar;
