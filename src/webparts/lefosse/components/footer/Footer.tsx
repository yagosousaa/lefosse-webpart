import * as React from "react";
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ChevronFirst className={styles.page} />
        <ChevronLeft className={styles.page} />
        <div className={styles.pageOne}>1</div>
        <div className={styles.page}>2</div>
        <div className={styles.page}>3</div>
        <div className={styles.page}>4</div>
        <div className={styles.page}>5</div>
        <div className={styles.page}>6</div>
        <div className={styles.page}>7</div>
        <div className={styles.page}>8</div>
        <div className={styles.page}>9</div>
        <div className={styles.page}>10</div>
        <ChevronRight className={styles.page} />
        <ChevronLast className={styles.page} />
      </footer>
    </>
  );
};
