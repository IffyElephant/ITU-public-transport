import { FC, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import styles from "./ConnectionsPage.module.css";
import classnames from "classnames";

type Connection = {
  type: "Tramvaj" | "Trolejbus" | "Autobus" | "Noční linka";
  number: string;
};

type Stop = {
  number: string;
  stops: string;
};

type Exclusion = {
  exclusion: string | null;
};

export const ConnectionsPage: FC = () => {
  const [connections, setConnections] = useState<Connection[]>();

  const [stops, setStops] = useState<Stop>();
  const [exclusions, setExclusions] = useState<Exclusion>();
  const [loading, setLoading] = useState(false);

  const loadVehicles = () => {
    fetch("/api/connection/numbers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setConnections(data);
      });
  };

  const loadVehicleStops = async (num: string) => {
    setLoading(true);

    fetch("/api/connection/stops/" + num, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        data.number = num;
        setStops(data);
        setLoading(false);
      });

    fetch("/api/connection/exclusions/" + num, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setExclusions(data);
      });
  };

  useEffect(loadVehicles, []);

  return (
    <div>
      <NavigationBar />

      <div className={styles["main"]}>
        <div className={styles["table"]}>
          {!connections && <h2>Načítání...</h2>}
          {connections && (
            <>
              <div className={styles["label"]}>Spoje</div>

              <div className={styles["container"]}>
                <img
                  className={styles["icon"]}
                  src="https://cdn-icons-png.flaticon.com/512/635/635690.png"
                  alt="Tramvaje"
                />
                <div className={styles["connection-table"]}>
                  {connections.map((c: Connection, index: number) => {
                    if (c.type === "Tramvaj")
                      return (
                        <button
                          onClick={() => loadVehicleStops(c.number)}
                          id={"tram_" + index}
                          className={styles["connection"]}
                        >
                          {c.number}
                        </button>
                      );
                    return <></>;
                  })}
                </div>
              </div>

              <div className={styles["container"]}>
                <img
                  className={styles["icon"]}
                  src="https://cdn-icons-png.flaticon.com/512/635/635691.png"
                  alt="Trolejbusy"
                />
                <div className={styles["connection-table"]}>
                  {connections.map((c: Connection, index: number) => {
                    if (c.type === "Trolejbus")
                      return (
                        <button
                          onClick={() => loadVehicleStops(c.number)}
                          id={"trol_" + index}
                          className={styles["connection"]}
                        >
                          {c.number}
                        </button>
                      );
                    return <></>;
                  })}
                </div>
              </div>

              <div className={styles["container"]}>
                <img
                  className={classnames(styles["icon"], styles["bus-icon"])}
                  src="https://cdn-icons-png.flaticon.com/512/168/168461.png"
                  alt="Autobusy"
                />
                <div className={styles["connection-table"]}>
                  {connections.map((c: Connection, index: number) => {
                    if (c.type === "Autobus")
                      return (
                        <button
                          onClick={() => loadVehicleStops(c.number)}
                          id={"bus_" + index}
                          className={styles["connection"]}
                        >
                          {c.number}
                        </button>
                      );
                    return <></>;
                  })}
                </div>
              </div>

              <div className={styles["container"]}>
                <img
                  className={classnames(styles["icon"], styles["bus-icon"])}
                  src="https://cdn-icons-png.flaticon.com/512/3093/3093380.png"
                  alt="Noční linky"
                />
                <div className={styles["connection-table"]}>
                  {connections.map((c: Connection, index: number) => {
                    if (c.type === "Noční linka")
                      return (
                        <button
                          onClick={() => loadVehicleStops(c.number)}
                          id={"noc_" + index}
                          className={styles["connection"]}
                        >
                          {c.number}
                        </button>
                      );
                    return <></>;
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        <div className={styles["stops"]}>
          {stops && (
            <div className={styles["label"]}>Zastávky linky {stops.number}</div>
          )}
          {loading && <div className={styles["text"]}>Načítání</div>}
          {!loading && stops && (
            <div className={styles["text"]}>{stops.stops}</div>
          )}
        </div>

        <div className={styles["exclusions"]}>
          {stops && <div className={styles["label"]}>Změny v trase</div>}
          {
            /* Loading therefore we write out Loading status*/
            loading && <div className={styles["text"]}>Načítání</div>
          }
          {
            /* Loading done, but theres no exclusions found because of an error or delayed server response plus check if we alreadyclicked on any connection*/
            !loading && !exclusions && stops && (
              <div className={styles["text"]}>Žádné mimořádnosti na trase</div>
            )
          }
          {
            /* Loading done, but we need to check if returned exclusion has any real exclusions or if its empty string*/
            (!loading && exclusions && exclusions.exclusion !== "" && (
              <div className={styles["text"]}>{exclusions.exclusion}</div>
            )) ||
              (exclusions?.exclusion === "" && (
                <div className={styles["text"]}>
                  Žádné mimořádnosti na trase
                </div>
              ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};
