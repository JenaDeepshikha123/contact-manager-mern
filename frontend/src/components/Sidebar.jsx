import { Link, useLocation } from "react-router-dom";
import { FaAddressBook, FaHome, FaPlus } from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  return (
    <div style={{ padding: "10px", borderRight: "1px solid #ccc" }}>
      <h3>
        <FaAddressBook /> Contact Manager
      </h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <Link to="/"> <FaHome /> Dashboard </Link>
        </li>

        <li style={{ margin: "10px 0" }}>
          <Link to="/add"> <FaPlus /> Add Contact </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;