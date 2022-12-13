// Author: Simon Peter Hruz (xhruzs00)
import { FC, useState } from "react";

// Components
import { ExclusionsTable } from "../../components/ExclusionsTable";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import { StopsTable } from "../../components/StopsTable";
import { VehiclesTable } from "../../components/VehiclesTable";

import styles from "./ConnectionsPage.module.css";
import classnames from "classnames";
import { HierarchyNav } from "../../components/HierarchyNav";

export const ConnectionsPage: FC = () => {
  const [activeVehicle, setActiveVehicle] = useState<string>();

  return (
    <>
      <NavigationBar />
      <HierarchyNav label2="Spoje" />

      <div className={styles["main"]}>
        <div className={styles["label"]}>Spoje</div>
        <VehiclesTable setActiveVehicle={setActiveVehicle} />

        {activeVehicle && (
          <>
            <div
              className={classnames(styles["label"], styles["space-between"])}
            >
              Zastávky spoje {activeVehicle}
            </div>
            <StopsTable vehNum={activeVehicle} />
          </>
        )}

        {activeVehicle && (
          <>
            <div
              className={classnames(styles["label"], styles["space-between"])}
            >
              Vínimočné situace na trase
            </div>
            <ExclusionsTable vehNum={activeVehicle} />
          </>
        )}
      </div>

      <Footer />
    </>
  );
};
