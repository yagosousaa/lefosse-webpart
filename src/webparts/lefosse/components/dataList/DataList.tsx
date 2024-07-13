import * as React from "react";
import { Stack, IStackTokens } from "@fluentui/react/lib/Stack";
import { TextField } from "@fluentui/react";
import styles from "./DataList.module.scss";
import { DocumentCard } from "../documentsCard/DocumentsCard";

const stackTokens: IStackTokens = { childrenGap: 20 };

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
          <DocumentCard />
        </Stack>
      </div>
    </>
  );
};
