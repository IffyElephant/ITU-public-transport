import { FC } from "react";
import styles from "./NewsBlock.module.css";

export interface NewsProps {
  url: string;
  label: string;
  desc?: string;
}

export const NewsBlock: FC<NewsProps> = ({ url, label, desc }) => {
  return (
    <a className={styles["block"]} href="/news">
      <img src={url} alt={label} />
      <p className={styles["label"]}>{label}</p>
      <div className={styles["block-desc"]}>
        <p className={styles["desc"]}>{desc}</p>
        <p className={styles["btn"]}>{">"}</p>
      </div>
    </a>
  );
};
