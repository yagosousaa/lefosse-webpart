import * as React from "react";

import {
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
  makeStyles,
} from "@fluentui/react-components";
import { File } from "lucide-react";

const useStyles = makeStyles({
  grid: {
    paddingTop: "2rem",
  },
});

type Item = {
  icon: JSX.Element;
  title: string;
  colecao: string;
  tipoDoDocumento: string;
  idioma: string;
  ano: number;
};

const items: Item[] = [
  {
    icon: <File />,
    title: "Documento",
    colecao: "Pesquisas Religiosas",
    tipoDoDocumento: "Livro",
    idioma: "Espanhol",
    ano: 1962,
  },
  {
    icon: <File />,
    title: "Documento1",
    colecao: "Santo Afonso",
    tipoDoDocumento: "Livro",
    idioma: "Espanhol",
    ano: 1962,
  },
  {
    icon: <File />,
    title: "Documento2",
    colecao: "Dom Tarcísio",
    tipoDoDocumento: "Artigo",
    idioma: "Espanhol",
    ano: 1962,
  },
  {
    icon: <File />,
    title: "Documento3",
    colecao: "Pesquisas Religiosas",
    tipoDoDocumento: "Livro",
    idioma: "Português",
    ano: 1962,
  },
  {
    icon: <File />,
    title: "Documento4",
    colecao: "Dom Tarcísio",
    tipoDoDocumento: "Multimídia",
    idioma: "Italiano",
    ano: 1962,
  },
  {
    icon: <File />,
    title: "Documento5",
    colecao: "Santo Afonso",
    tipoDoDocumento: "Multimídia",
    idioma: "Espanhol",
    ano: 1961,
  },
  {
    icon: <File />,
    title: "Documento6",
    colecao: "Dom Tarcísio",
    tipoDoDocumento: "Livro",
    idioma: "Italiano",
    ano: 1964,
  },
  {
    icon: <File />,
    title: "Documento7",
    colecao: "Santo Afonso",
    tipoDoDocumento: "Artigo",
    idioma: "Italiano",
    ano: 1962,
  },
  {
    icon: <File />,
    title: "Documento8",
    colecao: "Santo Afonso",
    tipoDoDocumento: "Livro",
    idioma: "Português",
    ano: 1962,
  },
  {
    icon: <File />,
    title: "Documento9",
    colecao: "Pesquisas Religiosas",
    tipoDoDocumento: "Multimídia",
    idioma: "Português",
    ano: 1962,
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "type",
    renderHeaderCell: () => {
      return "Tipo";
    },
    renderCell: (item) => {
      return <TableCellLayout media={item.icon}>{item.title}</TableCellLayout>;
    },
  }),

  createTableColumn<Item>({
    columnId: "colection",
    renderHeaderCell: () => {
      return "Coleção";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.colecao}</TableCellLayout>;
    },
  }),
  createTableColumn<Item>({
    columnId: "typeOfDocument",
    renderHeaderCell: () => {
      return "Tipo do Documento";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.tipoDoDocumento}</TableCellLayout>;
    },
  }),
  createTableColumn<Item>({
    columnId: "language",
    renderHeaderCell: () => {
      return "Idioma";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.idioma}</TableCellLayout>;
    },
  }),
];

export const Datagrid = () => {
  const styles = useStyles();
  return (
    <DataGrid
      items={items}
      columns={columns}
      sortable
      getRowId={(item) => item.title}
      focusMode="composite"
      className={styles.grid}
    >
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Item>>
        {({ item, rowId }) => (
          <DataGridRow<Item> key={rowId}>
            {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
