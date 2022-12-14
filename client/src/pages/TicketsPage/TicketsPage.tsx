import { FC } from "react";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import styles from "./TicketsPage.module.css";
import classnames from "classnames";

import { ToogleGroup } from "../../components/TicketItem";

export const TicketsPage: FC = () => {
  return (
    <>
      <NavigationBar />

      <div className={styles["top_panel"]}>
        <img
          className={styles["photo_ticket"]}
          src="https://mhd86.cz/wp-content/uploads/2019/08/20190806_085809-1.jpg"
          alt="Brno"
        />

        <img
          className={styles["photo_ticket"]}
          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Brno%2C_EVO_2_%C4%8D._1827.jpg"
          alt="Brno"
        />
        <h1>Jízdné</h1>
      </div>

      <div
        className={classnames(styles["ticket-section"], styles["DropDownItem"])}
      >
        <ToogleGroup />
      </div>
      <Footer />
    </>
  );
};
