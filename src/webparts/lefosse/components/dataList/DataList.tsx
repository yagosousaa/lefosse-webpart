import * as React from "react";
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";
import { TextField } from "@fluentui/react";
import styles from "./DataList.module.scss";
import { DocumentsCard } from "../documentsCard/DocumentsCard";
import { items } from "../../services/data";

const stackTokens: IStackTokens = { childrenGap: 20 };
const allItems = items;

export const DocumentCardCompact: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.searchBox}>
        <TextField
          placeholder="Digite para pesquisar..."
          className={styles.controlStyles}
        />
      </div>
      <div className={styles.mainContainer}>
        <Stack tokens={stackTokens}>
          <DocumentsCard items={allItems} />
        </Stack>
      </div>
    </>
  );
};
