import * as React from "react";
import styles from "./DocumentsCard.module.scss";
import { items } from "../../services/spsListServices";
import { VirtualizerScrollView } from "@fluentui/react-components/unstable";
import { TextField } from "@fluentui/react";
import { Tree, TreeItem, TreeItemLayout, Button } from "@fluentui/react-components";
import {
  BaseDocument,
  Capitulo,
  Contrato,
  Document,
  Livro,
} from "../../interfaces/interfaces";
import { X } from "lucide-react";

interface IDocumentCard {
  items: BaseDocument[];
  inputText: string;
}

export class DocumentCard extends React.Component<{}, IDocumentCard> {
  private _allItems: Document[];

  constructor(props: {}) {
    super(props);

    this._allItems = items;

    this.state = {
      items: this._allItems,
      inputText: "",
    };
  }

  public render(): JSX.Element {
    const { items } = this.state;
    const childLength = 100;
    {
      return (
        <div>
          <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.inputSearch}
                placeholder="Digite para pesquisar..."
                value={this.state.inputText}
                onChange={this._onChangeText}
                onKeyDown={this._onKeyDown}
                borderless
              />
              {this.state.inputText.length > 1 ? (
                <X size={20} onClick={this._onClearInput} className={styles.iconClass} />
              ) : (
                ""
              )}
            </div>

            <Button onClick={this._onSearchItems} size="small" appearance="primary">
              Buscar
            </Button>
          </div>
          <div className={styles.listScroll}>
            <VirtualizerScrollView
              numItems={items.length}
              itemSize={100}
              container={{ role: "list", style: { maxHeight: "510px" } }}
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
                    {items.map((item) =>
                      item.typeDocumental === "Capítulo" ? (
                        <div className={styles.cardContainer} key={item.id}>
                          <div className={styles.headerDocument}>
                            <h1 className={styles.titleDocument}>{item.title}</h1>
                            <h1 className={styles.tipoDocumental}>
                              {item.typeDocumental}
                            </h1>
                          </div>
                          <div className={styles.detailsDocument}>
                            <li>
                              <ol>
                                <strong>Autor: </strong>
                                {(item as Capitulo).author.length > 3
                                  ? (item as Capitulo).author.substring(0, 3) + "..."
                                  : (item as Capitulo).author}
                              </ol>
                              <ol>
                                <strong>Livro: </strong>
                                {(item as Capitulo).book}
                              </ol>
                              <ol>
                                <strong>Paginação: </strong>
                                {(item as Capitulo).pagination}
                              </ol>
                            </li>
                          </div>
                        </div>
                      ) : item.typeDocumental === "Livro" ? (
                        <div className={styles.cardContainer} key={item.id}>
                          <div className={styles.headerDocument}>
                            <h1 className={styles.titleDocument}>{item.title}</h1>
                            <h1 className={styles.tipoDocumental}>
                              {item.typeDocumental}
                            </h1>
                          </div>
                          <div className={styles.detailsDocument}>
                            <li>
                              <ol>
                                <strong>Autor: </strong>
                                {(item as Livro).author}
                              </ol>
                              <ol>
                                <strong>Ano da Publicação: </strong>
                                {(item as Livro).yearOfPublication}
                              </ol>
                            </li>
                          </div>
                        </div>
                      ) : item.typeDocumental === "Contrato" ? (
                        <div className={styles.cardContainer} key={item.id}>
                          <div className={styles.headerDocument}>
                            <h1 className={styles.titleDocument}>{item.title}</h1>
                            <h1 className={styles.tipoDocumental}>
                              {item.typeDocumental}
                            </h1>
                          </div>
                          <div className={styles.detailsDocument}>
                            <li>
                              <ol>
                                <strong>Data do Documento: </strong>
                                {(item as Contrato).dateDocument}
                              </ol>

                              <li className={styles.liHorizontal}>
                                <ol>
                                  <strong>Subtipo: </strong>
                                  {(item as Contrato).subtype}
                                </ol>
                                <ol>
                                  <strong>Coleção: </strong>
                                  {(item as Contrato).colection}
                                </ol>
                                <ol>
                                  <strong>Classe: </strong>
                                  {(item as Contrato).class}
                                </ol>
                                <ol>
                                  <strong>Subclasse: </strong>
                                  {(item as Contrato).subclass}
                                </ol>
                                <ol>
                                  <strong>Cláusulas: </strong>
                                  {(item as Contrato).clauses}
                                </ol>
                              </li>

                              <ol>
                                <div>
                                  <Tree size="small" aria-label="Default Size Tree">
                                    <TreeItem itemType="branch">
                                      <TreeItemLayout className={styles.treeItem}>
                                        <strong>Links</strong>
                                      </TreeItemLayout>
                                      <Tree>
                                        <TreeItem itemType="leaf">
                                          <TreeItemLayout>
                                            <ol>
                                              <strong>Link 1 (Descrição): </strong>
                                              {(item as Contrato).description1}
                                            </ol>
                                          </TreeItemLayout>
                                          <TreeItemLayout>
                                            <ol>
                                              <strong>Link 2 (Descrição): </strong>
                                              {(item as Contrato).description2}
                                            </ol>
                                          </TreeItemLayout>
                                          <TreeItemLayout>
                                            <ol>
                                              <strong>Link 3 (Descrição): </strong>
                                              {(item as Contrato).description3}
                                            </ol>
                                          </TreeItemLayout>
                                        </TreeItem>
                                      </Tree>
                                    </TreeItem>
                                  </Tree>
                                </div>
                              </ol>
                            </li>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                );
              }}
            </VirtualizerScrollView>
          </div>
        </div>
      );
    }
  }

  private _onChangeText = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ): void => {
    this.setState({ inputText: newValue || "" });
  };

  private _onSearchItems = (): void => {
    const { inputText } = this.state;
    this.setState({
      items: inputText
        ? this._allItems.filter(
            (i) => i.title.toLowerCase().indexOf(inputText.toLowerCase()) > -1
          )
        : this._allItems,
    });
  };

  private _onClearInput = (): void => {
    this.setState({ inputText: "", items: this._allItems });
  };

  private _onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      this._onSearchItems();
    }
  };
}
