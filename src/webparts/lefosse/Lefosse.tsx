import * as React from "react";
import type { ILefosseProps } from "./ILefosseProps";
import { FilterComponent } from "./components/filter/Filter";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import styles from "./Lefosse.module.scss";
import { DocumentCardCompact } from "./components/dataList/DataList";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export default class Lefosse extends React.Component<ILefosseProps, {}> {
  public render(): React.ReactElement<ILefosseProps> {
    return (
      <FluentProvider theme={webLightTheme}>
        <section>
          <Header />
          <div className={styles.container_content}>
            <FilterComponent />
            <div>
              <DocumentCardCompact />
            </div>
          </div>
          <Footer />
        </section>
      </FluentProvider>
    );
  }
}
