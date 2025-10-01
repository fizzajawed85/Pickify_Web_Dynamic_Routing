import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <FaBlog className={styles.icon} /> Pickify
      </div>
      <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
