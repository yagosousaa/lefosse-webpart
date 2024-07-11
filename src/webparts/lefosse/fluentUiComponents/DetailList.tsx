import * as React from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Announced } from "@fluentui/react/lib/Announced";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";
import { TooltipHost } from "@fluentui/react";

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px",
  },
  controlWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    flexWrap: "wrap",
  },

  arrowRight: {
    transform: "rotate(180deg)",
  },
});
const controlStyles = {
  root: {
    margin: "0 0 0px 3rem",
    borderRadius: "4px",
    width: "300px",
  },
};

export interface IDetailsListDocumentsState {
  columns: IColumn[];
  items: IDocument[];
  announcedMessage?: string;
}

export interface IDocument {
  key: string;
  fileType: string;
  iconName: string;
  name: string;
  colection: string;
  typeOfDocument: string;
  language: string;
  year: string;
}

export class DetailsListDocuments extends React.Component<
  {},
  IDetailsListDocumentsState
> {
  private _allItems: IDocument[];

  constructor(props: {}) {
    super(props);

    this._allItems = _generateDocuments();

    const columns: IColumn[] = [
      {
        key: "column1",
        name: "File Type",
        className: classNames.fileIconCell,
        iconClassName: classNames.fileIconHeaderIcon,
        ariaLabel: "Column operations for File type, Press to sort on File type",
        iconName: "Page",
        isIconOnly: true,
        fieldName: "name",
        minWidth: 16,
        maxWidth: 16,
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => (
          <TooltipHost content={`${item.fileType} file`}>
            <img
              src={item.iconName}
              className={classNames.fileIconImg}
              alt={`${item.fileType} file icon`}
            />
          </TooltipHost>
        ),
      },
      {
        key: "column2",
        name: "Nome",
        fieldName: "name",
        minWidth: 180,
        maxWidth: 210,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: "Sorted A to Z",
        sortDescendingAriaLabel: "Sorted Z to A",
        onColumnClick: this._onColumnClick,
        data: "string",
        isPadded: true,
      },
      {
        key: "column3",
        name: "Coleção",
        fieldName: "colection",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "number",
        onRender: (item: IDocument) => {
          return <span>{item.colection}</span>;
        },
        isPadded: true,
      },
      {
        key: "column4",
        name: "Tipo de Documento",
        fieldName: "typeOfDocument",
        minWidth: 120,
        maxWidth: 180,
        isResizable: true,
        isCollapsible: true,
        data: "string",
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => {
          return <span>{item.typeOfDocument}</span>;
        },
        isPadded: true,
      },
      {
        key: "column5",
        name: "Idioma",
        fieldName: "language",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: "number",
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => {
          return <span>{item.language}</span>;
        },
      },
      {
        key: "column6",
        name: "Ano",
        fieldName: "year",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: "number",
        onColumnClick: this._onColumnClick,
        onRender: (item: IDocument) => {
          return <span>{item.year}</span>;
        },
      },
    ];

    this.state = {
      items: this._allItems,
      columns,
      announcedMessage: undefined,
    };
  }

  public render() {
    const { columns, items, announcedMessage } = this.state;

    return (
      <div>
        <div className={classNames.controlWrapper}>
          <TextField
            placeholder="Digite para pesquisar..."
            onChange={this._onChangeText}
            styles={controlStyles}
          />

          <Announced message={`Number of items after filter applied: ${items.length}.`} />
        </div>

        {announcedMessage ? <Announced message={announcedMessage} /> : undefined}

        <DetailsList
          items={items}
          columns={columns}
          getKey={this._getKey}
          setKey="none"
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          onItemInvoked={this._onItemInvoked}
        />
      </div>
    );
  }

  private _getKey(item: any, index?: number): string {
    return item.key;
  }

  private _onChangeText = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text: string
  ): void => {
    this.setState({
      items: text
        ? this._allItems.filter(
            (i) =>
              i.name.toLowerCase().indexOf(text) > -1 ||
              i.colection.toLowerCase().indexOf(text) > -1 ||
              i.fileType.toLowerCase().indexOf(text) > -1 ||
              i.language.toLowerCase().indexOf(text) > -1 ||
              i.typeOfDocument.toLowerCase().indexOf(text) > -1 ||
              i.year.toLowerCase().indexOf(text) > -1
          )
        : this._allItems,
    });
  };

  private _onItemInvoked(item: any): void {
    alert(`Item invoked: ${item.name}`);
  }

  private _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
    const { columns, items } = this.state;
    const newColumns: IColumn[] = columns.slice();
    const currColumn: IColumn = newColumns.filter(
      (currCol) => column.key === currCol.key
    )[0];
    newColumns.forEach((newCol: IColumn) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
        this.setState({
          announcedMessage: `${currColumn.name} is sorted ${
            currColumn.isSortedDescending ? "descending" : "ascending"
          }`,
        });
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    const newItems = _copyAndSort(
      items,
      currColumn.fieldName!,
      currColumn.isSortedDescending
    );
    this.setState({
      columns: newColumns,
      items: newItems,
    });
  };
}

function _copyAndSort<T>(
  items: T[],
  columnKey: string,
  isSortedDescending?: boolean
): T[] {
  const key = columnKey as keyof T;
  return items
    .slice(0)
    .sort((a: T, b: T) =>
      (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
    );
}

function _generateDocuments() {
  const items: IDocument[] = [];
  for (let i = 0; i < 50; i++) {
    const randomYear = _gerarAnoAleatorio();
    const randomFileType = _randomFileIcon();
    const randomColection: string = _randomColection();
    const randomTypeOfDocument: string = _randomTypeOfDocument();
    const randomLanguage: string = _randomLanguage();
    let fileName = _lorem(2);
    fileName =
      fileName.charAt(0).toUpperCase() +
      fileName.slice(1).concat(`.${randomFileType.docType}`);
    let userName = _lorem(2);
    userName = userName
      .split(" ")
      .map((name: string) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");
    items.push({
      key: i.toString(),
      fileType: randomFileType.docType,
      iconName: randomFileType.url,
      name: fileName,
      colection: randomColection,
      typeOfDocument: randomTypeOfDocument,
      language: randomLanguage,
      year: randomYear,
    });
  }
  return items;
}

function _gerarAnoAleatorio(): string {
  const anoInicial: number = 1990;
  const anoFinal: number = 2024;

  // Gera um número aleatório entre 0 e 1 (exclusivo)
  const randomFraction: number = Math.random();

  // Calcula um número inteiro entre anoInicial e anoFinal, inclusivo
  const anoAleatorio: number =
    Math.floor(randomFraction * (anoFinal - anoInicial + 1)) + anoInicial;
  return anoAleatorio.toString();
}

function _randomColection(): string {
  const nomes = ["Pesquisas Religiosas", "Santo Afonso", "Dom Tarcísio"];
  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  return nomes[indiceAleatorio];
}

function _randomTypeOfDocument(): string {
  const nomes = ["Artigo", "Livro", "Multimída"];
  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  return nomes[indiceAleatorio];
}

function _randomLanguage(): string {
  const nomes = ["Português", "Italiano", "Espanhol"];
  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  return nomes[indiceAleatorio];
}

const FILE_ICONS: { name: string }[] = [
  { name: "accdb" },
  { name: "audio" },
  { name: "code" },
  { name: "csv" },
  { name: "docx" },
  { name: "dotx" },
  { name: "mpp" },
  { name: "mpt" },
  { name: "model" },
  { name: "one" },
  { name: "onetoc" },
  { name: "potx" },
  { name: "ppsx" },
  { name: "pdf" },
  { name: "photo" },
  { name: "pptx" },
  { name: "presentation" },
  { name: "potx" },
  { name: "pub" },
  { name: "rtf" },
  { name: "spreadsheet" },
  { name: "txt" },
  { name: "vector" },
  { name: "vsdx" },
  { name: "vssx" },
  { name: "vstx" },
  { name: "xlsx" },
  { name: "xltx" },
  { name: "xsn" },
];

function _randomFileIcon(): { docType: string; url: string } {
  const docType: string = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
  return {
    docType,
    url: `https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets/item-types/16/${docType}.svg`,
  };
}

const LOREM_IPSUM = (
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut " +
  "labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut " +
  "aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " +
  "eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt "
).split(" ");
let loremIndex = 0;
function _lorem(wordCount: number): string {
  const startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
  loremIndex = startIndex + wordCount;
  return LOREM_IPSUM.slice(startIndex, loremIndex).join(" ");
}
