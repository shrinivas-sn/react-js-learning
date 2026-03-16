import { NavLink } from "react-router-dom";
import styles from "./NavPage.module.css";
export default function NavPage() {
  return (
    <ul className={styles.navbar}>
      <div>
        <li>
          <NavLink className={styles.navbtn} to="/">
            Home
          </NavLink>
        </li>
      </div>
      <div className={styles.navlist}>
        <li>
          <NavLink className={styles.navbtn} to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navbtn} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navbtn} to="/history">
            History
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navbtn} to="/logactivity">
            LogActivity
          </NavLink>
        </li>
      </div>
    </ul>
  );
}
