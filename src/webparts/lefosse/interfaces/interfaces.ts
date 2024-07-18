export interface BaseDocument {
  typeDocumental: string;
  title: string;
  id: string;
}

export interface Contrato extends BaseDocument {
  typeDocumental: "Contrato";
  subtype: string;
  colection: string;
  link1: string;
  description1: string;
  link2: string;
  description2: string;
  link3: string;
  description3: string;
  class: string;
  subclass: string;
  dateDocument: string;
  subject: string;
  clauses: string;
  observation: string;
}

export interface Capitulo extends BaseDocument {
  typeDocumental: "Capítulo";
  author: string;
  book: string;
  pagination: string;
}

export interface Livro extends BaseDocument {
  typeDocumental: "Livro";
  author: string;
  placeOfPublication: string;
  publishing: string;
  yearOfPublication: string;
}

export type Document = Contrato | Capitulo | Livro;
