import * as React from "react";
import { Divider, Checkbox } from "@fluentui/react-components";
import { Filter } from "lucide-react";
import styles from "./Filter.module.scss";

export const FilterComponent = () => {
  return (
    <div className={styles.root}>
      <label className={styles.label}>
        <Filter className={styles.icon} size={16} />
        <h1 className={styles.h1}>Filtros</h1>
      </label>
      <div>
        <Divider />
      </div>

      <div>
        <h2 className={styles.titleFilter}>Tipo Documental</h2>
        <div className={styles.containerFilter}>
          <Checkbox size="medium" label="Contrato" />
          <Checkbox size="medium" label="Livro" />
          <Checkbox size="medium" label="Capítulo" />
        </div>
      </div>
      <div>
        <div className={styles.containerFilter}>
          <h2 className={styles.titleFilter}>Subtipo Documental</h2>
          <Checkbox size="medium" label="SPA" />
          <Checkbox size="medium" label="QPA" />
        </div>
      </div>
      <div>
        <div className={styles.containerFilter}>
          <h2 className={styles.titleFilter}>Cláusulas</h2>
          <Checkbox size="medium" label="Indenização" />
          <Checkbox size="medium" label="Arbitragem" />
          <Checkbox size="medium" label="Escrow" />
        </div>
      </div>
    </div>
  );
};
