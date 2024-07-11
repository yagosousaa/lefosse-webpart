import * as React from "react";
import type { ILefosseProps } from "./ILefosseProps";
import { FilterComponent } from "../fluentUiComponents/Filter";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import styles from "./Lefosse.module.scss";
import { DetailsListDocuments } from "../fluentUiComponents/DetailList";
import { Header } from "../fluentUiComponents/Header";
import { Footer } from "../fluentUiComponents/Footer";

export default class Lefosse extends React.Component<ILefosseProps, {}> {
  public render(): React.ReactElement<ILefosseProps> {
    return (
      <FluentProvider theme={webLightTheme}>
        <section>
          <Header />
          <div className={styles.container_content}>
            <FilterComponent />
            <div>
              <DetailsListDocuments />
            </div>
          </div>
          <Footer />
        </section>
      </FluentProvider>
    );
  }
}
