import * as React from "react";
import { makeStyles, shorthands, Divider, Checkbox } from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";
import { Filter } from "lucide-react";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    ...shorthands.gap("2px"),
    maxWidth: "400px",
  },

  label: {
    display: "flex",
    alignItems: "center",
    width: "100vw",
  },

  icon: {
    paddingRight: "6px",
  },

  title: {
    fontSize: "1rem",
    fontWeight: "bolder",
  },

  titleFilter: {
    fontSize: "1rem",
    fontWeight: "bolder",
  },

  containerFilter: {
    display: "flex",
    flexDirection: "column",
  },
});

export const FilterComponent = (props: Partial<DropdownProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <label className={styles.label}>
        <Filter className={styles.icon} size={16} />
        <p className={styles.title}>Filtros</p>
      </label>
      <div>
        <Divider />
      </div>

      <div>
        <p className={styles.titleFilter}>Coleção</p>
        <div className={styles.containerFilter}>
          <Checkbox size="medium" label="Pesquisas Religiosas" />
          <Checkbox size="medium" label="Santo Afonso" />
          <Checkbox size="medium" label="Dom Tarcísio" />
        </div>
      </div>
      <div>
        <div className={styles.containerFilter}>
          <p className={styles.titleFilter}>Tipo do documento</p>
          <Checkbox size="medium" label="Artigo" />
          <Checkbox size="medium" label="Livro" />
          <Checkbox size="medium" label="Multimídia" />
        </div>
      </div>
      <div>
        <div className={styles.containerFilter}>
          <p className={styles.titleFilter}>Idioma</p>
          <Checkbox size="medium" label="Português" />
          <Checkbox size="medium" label="Italiano" />
          <Checkbox size="medium" label="Espanhol" />
        </div>
      </div>
      <div>
        <div className={styles.containerFilter}>
          <p className={styles.titleFilter}>Ano</p>
          <Checkbox size="medium" label="1964" />
          <Checkbox size="medium" label="1962" />
          <Checkbox size="medium" label="1961" />
        </div>
      </div>
    </div>
  );
};
