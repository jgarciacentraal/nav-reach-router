import * as React from "react";
import HeaderStyle from "./Header.module.css";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "@reach/router";
function Header() {
  return (
    <nav className={HeaderStyle.nav}>
      <div className={HeaderStyle.navLogo}>
        {" "}
        <FaConnectdevelop size={30} />{" "}
      </div>
      <ul className={HeaderStyle.navItems}>
        <Link to="/" className={HeaderStyle.navButtons}>
          Home
        </Link>

        <Link to="admin" className={HeaderStyle.navButtons}>
          Admin
        </Link>

        <Link to="contact" className={HeaderStyle.navButtons}>
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
