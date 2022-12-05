import { FC } from "react";
import styles from "./NavigationBar.module.css";
import classnames from "classnames";

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
        <a className={styles["nav-btn"]} href="/connections">
          Spojení
        </a>
        <a className={styles["nav-btn"]} href="/stops">
          Zastávky
        </a>
        <a className={styles["nav-btn"]} href="/tickets">
          Lístky
        </a>
        <a className={styles["nav-btn"]} href="/services">
          Služby
        </a>
        <a
          className={classnames(styles["nav-btn"], styles["sign-in"])}
          href="/login"
        >
          Přihlášení
        </a>
        <a
          className={classnames(styles["nav-btn"], styles["sign-up"])}
          href="/register"
        >
          Registrace
        </a>
      </nav>
    </div>
  );
};
