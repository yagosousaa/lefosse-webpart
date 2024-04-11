import * as React from "react";
import type { ILefosseProps } from "./ILefosseProps";
import { DropdownFluentUI } from "../fluentUiComponents/Dropdown";

import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Searchbox } from "../fluentUiComponents/Searchbox";
import { data } from "../data/dataList";

export default class Lefosse extends React.Component<ILefosseProps, {}> {
  public render(): React.ReactElement<ILefosseProps> {
    return (
      <FluentProvider theme={webLightTheme}>
        <Searchbox />
        <DropdownFluentUI />
        <div>
          <div>
            {data.map((data) => {
              return <p key={data.title}>{data.title}</p>;
            })}
          </div>
        </div>
      </FluentProvider>
    );
  }
}
