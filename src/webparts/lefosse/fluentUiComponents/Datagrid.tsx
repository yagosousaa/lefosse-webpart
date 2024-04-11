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
} from "@fluentui/react-components";
import { File } from "lucide-react";

type Item = {
  icon: JSX.Element;
  title: string;
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
};

const items: Item[] = [
  {
    icon: <File />,
    title: "Documento",
    pais: "Brasil",
    estado: "São Paulo",
    cidade: "São Paulo",
    bairro: "Moema",
  },
  {
    icon: <File />,
    title: "Documento1",
    pais: "Alemanha",
    estado: "Baviera",
    cidade: "Munique",
    bairro: "Schwabing",
  },
  {
    icon: <File />,
    title: "Documento2",
    pais: "Alemanha",
    estado: "Berlim",
    cidade: "Berlim",
    bairro: "Mitte",
  },
  {
    icon: <File />,
    title: "Documento3",
    pais: "Estados Unidos",
    estado: "Califórnia",
    cidade: "Los Angeles",
    bairro: "Hollywood",
  },
  {
    icon: <File />,
    title: "Documento4",
    pais: "Estados Unidos",
    estado: "Nova Iorque",
    cidade: "Nova Iorque",
    bairro: "Manhattan",
  },
  {
    icon: <File />,
    title: "Documento5",
    pais: "Austrália",
    estado: "Nova Gales do Sul",
    cidade: "Sydney",
    bairro: "Darlinghurst",
  },
  {
    icon: <File />,
    title: "Documento6",
    pais: "Austrália",
    estado: "Vitória",
    cidade: "Melbourne",
    bairro: "Fitzroy",
  },
  {
    icon: <File />,
    title: "Documento7",
    pais: "Espanha",
    estado: "Catalunha",
    cidade: "Barcelona",
    bairro: "Gràcia",
  },
  {
    icon: <File />,
    title: "Documento8",
    pais: "Espanha",
    estado: "Catalunha",
    cidade: "Barcelona",
    bairro: "Gràcia",
  },
  {
    icon: <File />,
    title: "Documento9",
    pais: "Espanha",
    estado: "Catalunha",
    cidade: "Barcelona",
    bairro: "Gràcia",
  },
  {
    icon: <File />,
    title: "Documento10",
    pais: "Brasil",
    estado: "Rio de Janeiro",
    cidade: "Rio de Janeiro",
    bairro: "Copacabana",
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
    columnId: "countrie",
    renderHeaderCell: () => {
      return "País";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.pais}</TableCellLayout>;
    },
  }),
  createTableColumn<Item>({
    columnId: "state",
    renderHeaderCell: () => {
      return "Estado";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.estado}</TableCellLayout>;
    },
  }),
  createTableColumn<Item>({
    columnId: "city",
    renderHeaderCell: () => {
      return "Cidade";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.cidade}</TableCellLayout>;
    },
  }),
  createTableColumn<Item>({
    columnId: "neighborhood",
    renderHeaderCell: () => {
      return "Bairro";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.bairro}</TableCellLayout>;
    },
  }),
];

export const Datagrid = () => {
  return (
    <DataGrid
      items={items}
      columns={columns}
      sortable
      getRowId={(item) => item.title}
      focusMode="composite"
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
