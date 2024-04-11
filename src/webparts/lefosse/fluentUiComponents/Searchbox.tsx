import * as React from "react";
import { makeStyles, shorthands, useId, Input, Label } from "@fluentui/react-components";
import type { InputProps } from "@fluentui/react-components";
import { Search } from "lucide-react";

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
    paddingRight: "6px",
  },
});

export const Searchbox = (props: InputProps) => {
  const inputId = useId("input");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label
        className={styles.label}
        htmlFor={inputId}
        size={props.size}
        disabled={props.disabled}
      >
        <Search className={styles.icon} size={14} /> Pesquisa
      </Label>
      <Input id={inputId} {...props} />
    </div>
  );
};
