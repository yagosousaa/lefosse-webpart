import * as React from "react";
import styles from "./DataList.module.scss";
import { DocumentCard } from "../documentsCard/DocumentsCard";

export const DocumentCardCompact: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <DocumentCard />
      </div>
    </>
  );
};
