import * as React from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  header: {
    fontSize: "18px",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "#057CD2",
    padding: "8px",
    marginBottom: "1rem",
    fontSmooth: "inherit",
  },
  image: {
    width: "52px",
    height: "52px",
    borderRadius: "4px",
  },
});

export const Header = () => {
  const styles = useStyles();

  return (
    <>
      <header className={styles.header}>
        <img
          src="https://fabricweb.azureedge.net/fabric-website/placeholders/100x100.png"
          alt=""
          className={styles.image}
        />
        <h1>Nome da Empresa</h1>
      </header>
    </>
  );
};
