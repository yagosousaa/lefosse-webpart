import * as React from "react";
import type { ILefosseProps } from "./ILefosseProps";
import { FilterComponent } from "../fluentUiComponents/Filter";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Searchbox } from "../fluentUiComponents/Searchbox";
import { Datagrid } from "../fluentUiComponents/Datagrid";
import styles from "./Lefosse.module.scss";

// import { SPFI } from "@pnp/sp";
// import { getSP } from "../../../pnpjs.config";

// const listItems = (props: ILefosseProps) => {
//   const LIST_NAME = "Processos";

//   let _sp: SPFI = getSP(props.context);
//   const getListItems = async () => {
//     let items: any[] = await _sp.web.lists.getByTitle(LIST_NAME).items();
//     return items;
//   };

//   return getListItems;
// };

export default class Lefosse extends React.Component<ILefosseProps, {}> {
  public render(): React.ReactElement<ILefosseProps> {
    return (
      <FluentProvider theme={webLightTheme}>
        <section>
          <div className={styles.container_content}>
            <FilterComponent />
            <div>
              <Searchbox />
              <Datagrid />
            </div>
          </div>
        </section>
      </FluentProvider>
    );
  }
}
