import * as React from "react";
import styles from "./DocumentsCard.module.scss";

interface IDocumentCard {
  items: {};
}

export const DocumentsCard = (props: IDocumentCard) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.previewDocument}></div>
      </div>
    </>
  );
};
