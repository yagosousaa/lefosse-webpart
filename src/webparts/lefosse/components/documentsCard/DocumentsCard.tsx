import * as React from "react";
import styles from "./DocumentsCard.module.scss";
import { items } from "../../services/data";
import { VirtualizerScrollView } from "@fluentui/react-components/unstable";
import { ITextFieldStyles, TextField } from "@fluentui/react";

interface IDocumentCard {
  items: IDocument[];
}
export interface IDocument {
  key: number;
  tipoDocumental: string;
  titulo: string;
  subtipoDocumental: string;
  colecao: string;
  classe: string;
  subclasse: string;
}

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: "300px" } };

export class DocumentCard extends React.Component<{}, IDocumentCard> {
  private _allItems: IDocument[];

  constructor(props: {}) {
    super(props);

    this._allItems = items;

    this.state = {
      items: this._allItems,
    };
  }
  public render(): JSX.Element {
    const { items } = this.state;
    const childLength = 100;
    {
      return (
        <div>
          <div className={styles.searchContainer}>
            <TextField
              placeholder="Digite para pesquisar..."
              className={styles.searchBox}
              onChange={this._onChangeText}
              styles={textFieldStyles}
            />
          </div>
          <VirtualizerScrollView
            numItems={items.length}
            itemSize={100}
            container={{ role: "list", style: { maxHeight: "560px" } }}
          >
            {(index: number) => {
              return (
                <div
                  role={"listitem"}
                  aria-posinset={index}
                  aria-setsize={childLength}
                  key={`test-virtualizer-child-${index}`}
                  className={styles.child}
                >
                  {items.map((item) => (
                    <div className={styles.cardContainer} key={item.key}>
                      <div className={styles.previewDocument}>
                        <h1 className={styles.tipoDocumental}>{item.tipoDocumental}</h1>
                      </div>
                      <div className={styles.detailsDocument}>
                        <h1 className={styles.titleDocument}>{item.titulo}</h1>
                        <li>
                          <ol>
                            <strong>Subtipo Documental:</strong> {item.subtipoDocumental}
                          </ol>
                          <ol>
                            <strong>Coleção:</strong> {item.colecao}
                          </ol>
                          <ol>
                            <strong>Classe:</strong> {item.classe}
                          </ol>
                          <ol>
                            <strong>Subclasse:</strong> {item.subclasse}
                          </ol>
                        </li>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          </VirtualizerScrollView>
        </div>
      );
    }
  }

  private _onChangeText = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text: string
  ): void => {
    const searchText = text.toLowerCase();

    this.setState({
      items: searchText
        ? this._allItems.filter(
            (i) =>
              i.classe.toLowerCase().indexOf(searchText) > -1 ||
              i.colecao.toLowerCase().indexOf(searchText) > -1 ||
              i.subclasse.toLowerCase().indexOf(searchText) > -1 ||
              i.subtipoDocumental.toLowerCase().indexOf(searchText) > -1 ||
              i.tipoDocumental.toLowerCase().indexOf(searchText) > -1 ||
              i.titulo.toLowerCase().indexOf(searchText) > -1
          )
        : this._allItems,
    });
  };
}
