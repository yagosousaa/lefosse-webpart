import * as React from "react";
import type { ILefosseProps } from "./ILefosseProps";
import { FilterComponent } from "../fluentUiComponents/Filter";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Searchbox } from "../fluentUiComponents/Searchbox";
import { Datagrid } from "../fluentUiComponents/Datagrid";
import styles from "./Lefosse.module.scss";

export default class Lefosse extends React.Component<ILefosseProps, {}> {
  public render(): React.ReactElement<ILefosseProps> {
    return (
      <FluentProvider theme={webLightTheme}>
        <section>
          <Searchbox />

          <div className={styles.container_content}>
            <FilterComponent />
            <Datagrid />
          </div>
        </section>
      </FluentProvider>
    );
  }
}
