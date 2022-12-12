// Author: Simon Peter Hruz (xhruzs00)
import { FC, useEffect, useState } from "react";

// components
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";

import styles from "./StopsPage.module.css";

type StopType = {
  label: string;
  connections: string[];
};

export const StopsPage: FC = () => {
  const [stops, setStops] = useState<StopType[]>();

  useEffect(() => {
    fetch("/api/stops", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);

        data.map((c: any) => (c.connections = c.connections.split("-")));

        setStops(data);
      });
  }, []);

  return (
    <div>
      <NavigationBar />

      <div className={styles["main"]}>
        <div className={styles["label"]}>Zastávky</div>

        <div className={styles["table"]}>
          <div className={styles["table-rows"]}>
            <div
              className={styles["table-names"]}
              style={{ fontWeight: "bold" }}
            >
              Jméno
            </div>

            <div
              className={styles["table-numbers"]}
              style={{ fontWeight: "bold" }}
            >
              Spojení
            </div>
          </div>

          {stops &&
            stops.map((c) => (
              <div className={styles["table-rows"]}>
                <div className={styles["table-names"]}>{c.label}</div>

                <div className={styles["table-numbers"]}>
                  {c.connections.map((d) => (
                    <div>{d}</div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
