import * as React from "react";

import { TextField } from "@fluentui/react";
import styles from "./DataList.module.scss";
import { DocumentCard } from "../documentsCard/DocumentsCard";

export const DocumentCardCompact: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.searchBox}>
        <TextField
          placeholder="Digite para pesquisar..."
          className={styles.controlStyles}
        />
        <button className={styles.searchButton}>Buscar</button>
      </div>
      <div className={styles.mainContainer}>
        <DocumentCard />
      </div>
    </>
  );
};
