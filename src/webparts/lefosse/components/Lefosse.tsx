import * as React from "react";
import type { ILefosseProps } from "./ILefosseProps";
import { DropdownFluentUI } from "../fluentUiComponents/Dropdown";

import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Searchbox } from "../fluentUiComponents/Searchbox";
import { Datagrid } from "../fluentUiComponents/Datagrid";
// import { data } from "../data/dataList";

export default class Lefosse extends React.Component<ILefosseProps, {}> {
  public render(): React.ReactElement<ILefosseProps> {
    return (
      <FluentProvider theme={webLightTheme}>
        <Searchbox />
        <DropdownFluentUI />
        <div>
          <div>
            <Datagrid />
          </div>
        </div>
      </FluentProvider>
    );
  }
}
