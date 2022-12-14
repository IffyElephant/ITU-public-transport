// Author: Simon Peter Hruz (xhruzs00)
import { FC, useEffect, useState } from "react";

// components
import { Footer } from "../../components/Footer";
import { HierarchyNav } from "../../components/HierarchyNav";
import { NavigationBar } from "../../components/NavigationBar";

import styles from "./StopsPage.module.css";

type StopType = {
  label: string;
  connections: string[];
};

export const StopsPage: FC = () => {
  const [stops, setStops] = useState<StopType[]>();
  const [query, setQuery] = useState<string>("");
  let foundOne = false;
  let result = false;

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
        data.map((c: any) => (c.connections = c.connections.split("-")));

        setStops(data);
      });
  }, []);

  return (
    <div>
      <NavigationBar />

      <HierarchyNav label2="Zastávky" />

      <div className={styles["main"]}>
        <div className={styles["label"]}>Zastávky</div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles["search"]}
          placeholder="Vyhledat"
        />

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
            stops.map((c) => {
              result = false;

              const myQuery = query.split(" ");
              const myLabel = c.label.toLowerCase();

              if (
                myQuery.some((subq) => c.connections.includes(subq)) ||
                myQuery.some((subq) => myLabel.includes(subq))
              ) {
                foundOne = true;
                result = true;
              }

              return (
                <>
                  {(!query || (query && result)) && (
                    <>
                      <div className={styles["table-rows"]}>
                        <div className={styles["table-names"]}>{c.label}</div>

                        <div className={styles["table-numbers"]}>
                          {c.connections.map((d) => (
                            <div>{d}</div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          {!foundOne && (
            <div className={styles["table-names"]}>Žádná zhoda</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
