import * as React from "react";
import { makeStyles, shorthands, Input, Button } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";
import { Search } from "lucide-react";
import "../fluentUiComponents/Searchbox.scss";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    ...shorthands.gap("2px"),
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
  },

  label: {
    display: "flex",
    alignItems: "center",
  },

  icon: {
    paddingRight: "4px",
  },

  title: {
    fontSize: "1.3rem",
    fontWeight: "bolder",
  },

  container_search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export const Searchbox = (props: InputProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.label}>
        <Search className={styles.icon} size={14} />
        <p className={styles.title}>Pesquisa</p>
      </div>
      <div className={styles.container_search}>
        <Input {...props} />
        <Button className="buttonSearch" appearance="primary" size="medium">
          Buscar
        </Button>
      </div>
    </div>
  );
};
