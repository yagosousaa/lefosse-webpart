import * as React from "react";
import { makeStyles, shorthands, Button, SearchBox } from "@fluentui/react-components";
import type { SearchBoxProps } from "@fluentui/react-components";
import "../fluentUiComponents/Searchbox.scss";
import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { items } from "./Datagrid";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "full",
    // Use 2px gap below the label (per the design system)
    ...shorthands.gap("2px"),
    // Prevent the example from taking the full width of the page (optional)
  },

  section: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
    minHeight: "52px",
  },

  container_search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  search_box: {
    minWidth: "300px",
  },
});

export const Searchbox = (props: SearchBoxProps) => {
  const styles = useStyles();
  const [search, setSearch] = useState("");

  const filteredNotes =
    search !== ""
      ? items.filter((item) =>
          item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : items;

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  return (
    <div className={styles.section}>
      <div className={styles.root}>
        <div className={styles.container_search}>
          <SearchBox
            className={styles.search_box}
            placeholder="Digite sua pesquisa..."
            onChange={handleSearch}
            {...props}
          />
          <Button
            icon={<Search size={18} />}
            className="buttonSearch"
            appearance="primary"
            size="medium"
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};
