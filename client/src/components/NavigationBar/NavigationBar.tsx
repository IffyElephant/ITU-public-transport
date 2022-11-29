import { FC } from "react";
import styles from "./NavigationBar.module.css";

export const NavigationBar: FC = () => {
  return (
    <div className={styles["navigation-bar"]}>
      <a href="/">
        <img
          className={styles["logo"]}
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Brno_%28znak%29.svg"
          alt="Public Transport Brno"
        />
      </a>

      <nav className={styles["navigation"]}>
        <a href="/connections">Connections</a>
        <a href="/stops">Stops</a>
        <a href="/tickets">Tickets</a>
        <a href="/services">Services</a>
        <a className={styles["sign-in"]} href="/login">
          Sign In
        </a>
        <a className={styles["sign-up"]} href="/register">
          Sign Up
        </a>
      </nav>
    </div>
  );
};
