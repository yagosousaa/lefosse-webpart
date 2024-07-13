import * as React from "react";
import styles from "./DocumentsCard.module.scss";
import { items } from "../../services/data";

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

export class DocumentCard extends React.Component<{}, IDocumentCard> {
  private _allItems: IDocument[];

  constructor(props: {}) {
    super(props);

    this._allItems = items;

    this.state = {
      items: this._allItems,
    };
  }
  public render() {
    return (
      <div>
        {items.map((item) => (
          <div className={styles.cardContainer}>
            <div className={styles.previewDocument}>
              <h1 className={styles.tipoDocumental}>{item.tipoDocumental}</h1>
            </div>
            <div className={styles.detailsDocument}>
              <h1>{item.titulo}</h1>
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
  }
}
