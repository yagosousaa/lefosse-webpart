import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  shorthands,
  useId,
} from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";
import { MapPin } from "lucide-react";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    ...shorthands.gap("2px"),
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

export const DropdownFluentUI = (props: Partial<DropdownProps>) => {
  const dropdownId = useId("dropdown-default");
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <label className={styles.label} id={dropdownId}>
        <MapPin className={styles.icon} size={14} /> Local
      </label>
      <Dropdown
        aria-labelledby={dropdownId}
        placeholder="Selecione a localização"
        {...props}
      >
        <Option text=""></Option>
      </Dropdown>
    </div>
  );
};
