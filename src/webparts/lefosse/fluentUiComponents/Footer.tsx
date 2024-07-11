import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
const useStyles = makeStyles({
  footer: {
    fontSize: "18px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "8px",
    marginTop: "1rem",
    fontSmooth: "inherit",
  },

  page: {
    border: "1px solid rgba(166, 166, 166, 0.3)",
    height: "24px",
    width: "24px",
    color: "#057CD2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      background: "whitesmoke",
    },
  },

  pageOne: {
    border: "1px solid rgba(166, 166, 166, 0.3)",
    height: "24px",
    width: "24px",
    background: "#057CD2",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      background: "#034b7f",
    },
  },
});

export const Footer = () => {
  const styles = useStyles();

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
