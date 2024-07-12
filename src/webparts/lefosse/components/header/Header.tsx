import * as React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://fabricweb.azureedge.net/fabric-website/placeholders/100x100.png"
        alt=""
        className={styles.image}
      />
      <h1>Lefosse - Portal do Conhecimento</h1>
    </header>
  );
};
