import * as React from "react";
import { makeStyles, shorthands, Input, Button } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";
import "../fluentUiComponents/Searchbox.scss";
import { Search } from "lucide-react";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "full",
    // Use 2px gap below the label (per the design system)
    ...shorthands.gap("2px"),
    // Prevent the example from taking the full width of the page (optional)
  },

  section: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
    minHeight: "52px",
  },

  label: {
    display: "flex",
    alignItems: "center",
  },

  container_search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  searchBox: {
    width: "250px",
  },
});

export const Searchbox = (props: InputProps) => {
  const styles = useStyles();

  return (
    <div className={styles.section}>
      <div className={styles.root}>
        <div className={styles.container_search}>
          <Input
            className={styles.searchBox}
            placeholder="Digite sua pesquisa..."
            {...props}
          />
          <Button
            icon={<Search size={18} />}
            className="buttonSearch"
            appearance="primary"
            size="medium"
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};
